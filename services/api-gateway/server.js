import express from 'express';
import path from 'path';
import httpProxy from 'http-proxy'; //Para hacer proxy a los microservicios
import cors from 'cors';

const app = express();
app.use(express.json());

//Crear un proxy para redirigir solicitudes a los microservicios
const proxy = httpProxy.createProxyServer();

//COn esto podeis ver mas info de las consultas
import morgan from 'morgan';
app.use(morgan('dev'));

//Configuracion de CORS (Opcional, solo si os da algun fallo por eso)
// const cors = require('cors');

app.use(cors({
  origin: '*', // Cambiar si necesitas restringir orígenes
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', (req, res) => {
  res.sendStatus(200);
});


const PORT = 3000;

//Importante, sin esta linea no carga el css y js de public
app.use(express.static('public'));

//Registrar todas las solicitudes entrantes
app.use((req, res, next) => {
  console.log('Solicitud recibida en el API Gateway:');
  console.log(`Ruta: ${req.path}`);
  console.log(`Método: ${req.method}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);
  console.log(`Cuerpo: ${JSON.stringify(req.body)}`);
  next();
});

//Redirigir al microservicio de USUARIOS
app.use('/users', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3001' }); //Redirige a users-service
});

//Redirigir al microservicio de PRODUCTOS
app.use('/reviews', (req, res) => {
  //Al microservicio le llegara un get a / no a /products, ojo cone so.
  proxy.web(req, res, { target: 'http://localhost:3011/reviews' });
});

//Redirigir al microservicio de COCHES
app.use('/cars', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3010/cars' });
});


//IMPORTANTE: Decir al proxy que hacer con el cuerpo de solicitudes (POST, PUT)
proxy.on('proxyReq', (proxyReq, req, res) => {

  if (req.body) {
    const bodyData = JSON.stringify(req.body);
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
    proxyReq.setHeader('Content-Type', 'application/json');
    proxyReq.write(bodyData); //Reenvía el cuerpo de la solicitud
  }
 
  console.log('Solicitud redirigida al microservicio:');
  console.log(`Método: ${req.method}`);
  console.log(`Cuerpo reenviado: ${req.body ? JSON.stringify(req.body) : 'Sin cuerpo'}`);
});

//Información de la respuesta del proxy a la consulta
proxy.on('proxyRes', (proxyRes, req, res) => {
  let responseBody = '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  proxyRes.on('data', (chunk) => {
    responseBody += chunk;
  });
  proxyRes.on('end', () => {
    console.log('Respuesta recibida del microservicio:');
    console.log(`Código de estado: ${proxyRes.statusCode}`);
    console.log(`Cuerpo: ${responseBody}`);
  });
});

//Manejo de errores del proxy
proxy.on('error', (err, req, res) => {
  console.error('Error al redirigir al microservicio:', err.message);

  //Responder al cliente con un mensaje de error
  res.writeHead(502, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    error: 'Bad Gateway',
    message: 'El microservicio no está disponible o no se pudo redirigir la solicitud.'
  }));
});

//Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en http://localhost:${PORT}`);
});
