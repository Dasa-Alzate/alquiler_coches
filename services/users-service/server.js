import express from 'express';
const app = express();
app.use(express.json());

//COn esto podeis ver mas info de las consultas
import morgan from 'morgan';
app.use(morgan('dev'));

import cors from 'cors';
app.use(cors());

const PORT = 3001; //El puerto en el que corre este microservicio

//Rutas
/*import usrRoutes from './routes/users.js';
app.use('/', usrRoutes);*/
import authRoutes from './routes/auth.js';
app.use('/auth', authRoutes);

//Servidor en escucha
app.listen(PORT, () => {
  console.log(`Products-service corriendo en http://localhost:${PORT}`);
});
