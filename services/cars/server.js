import express from 'express';
import cors from 'cors';
import { db } from './config/firebase.js';
import { collection, getDocs, getDoc, doc, setDoc, updateDoc, deleteDoc, addDoc, query, orderBy, startAfter, limit } from 'firebase/firestore';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3010;

async function getCollection(collectionName) {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function getCollectionPaginated(collectionName, page = 1) {
    
    const pg = parseInt(page) || 1;
    const pageSize = pg === 1 ? 8 : 4;
    const offset = ((pg - 1) * pageSize);
    
    const q = query(
        collection(db, collectionName),
        orderBy("year"),
        limit(offset + pageSize)
    );

    const snapshot = await getDocs(q);
    const docs = snapshot.docs.slice(offset).map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));

    return docs;
}

async function getDocument(collectionName, id) {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
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

app.get('/cars/paginated/:page', async (req, res) => res.json(await getCollectionPaginated('cars', req.params.page)));
app.get('/cars/:id', async (req, res) => res.json(await getDocument('cars', req.params.id)));
app.get('/cars', async (req, res) => res.json(await getCollection('cars')));
app.post('/cars', async (req, res) => res.json(await createDocument('cars', req.body)));
app.put('/cars/:id', async (req, res) => res.json(await updateDocument('cars', req.params.id, req.body)));
app.delete('/cars/:id', async (req, res) => res.json(await deleteDocument('cars', req.params.id)));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
