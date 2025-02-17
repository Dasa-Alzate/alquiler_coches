import express from 'express';
import cors from 'cors';
import { db } from './config/firebase.js';
import { collection, getDocs, getDoc, doc, setDoc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3011;

async function getCollection(collectionName) {
    const snapshot = await getDocs(collection(db, collectionName));

    return Promise.all(snapshot.docs.map(async (docSnap) => {
        let data = { id: docSnap.id, ...docSnap.data() };

        if (data.user) {
            const userId = data.user.id; 
            const userSnap = await getDoc(doc(db, 'users', userId));
            data.user = userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
        }

        return data;
    }));
}

async function getDocument(collectionName, id) {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    let data = { id: docSnap.id, ...docSnap.data() };

    if (data.user) {
        const userId = data.user.id;
        const userSnap = await getDoc(doc(db, 'users', userId));
        data.user = userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
    }

    return data;
}

async function createDocument(collectionName, data) {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { id: docRef.id, ...data };
}

async function updateDocument(collectionName, id, data) {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
    return { id, ...data };
}

async function deleteDocument(collectionName, id) {
    await deleteDoc(doc(db, collectionName, id));
    return { message: `Documento ${id} eliminado` };
}

app.get('/reviews', async (req, res) => res.json(await getCollection('reviews')));
app.get('/reviews/:id', async (req, res) => res.json(await getDocument('reviews', req.params.id)));
app.post('/reviews', async (req, res) => res.json(await createDocument('reviews', req.body)));
app.put('/reviews/:id', async (req, res) => res.json(await updateDocument('reviews', req.params.id, req.body)));
app.delete('/reviews/:id', async (req, res) => res.json(await deleteDocument('reviews', req.params.id)));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
