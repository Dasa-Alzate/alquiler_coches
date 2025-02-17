import { db } from '../../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import express from 'express';

const router = express.Router();
const auth = getAuth();

  //Crear un nuevo usr
router.post('/register', async (req, res) => {
    console.log("Cuerpo recibido:", req.body);
    const email = req.body.email;
    const password = req.body.pass;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        //Signed up 
        const user = userCredential.user;
        return res.status(200).json({ message: 'Te has registrado exitosamente' });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return res.status(500).json({ error: 'Error al crear el producto' + errorMessage });
    }); 
});
export default router;