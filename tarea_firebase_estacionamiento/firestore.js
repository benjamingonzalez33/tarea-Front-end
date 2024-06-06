// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Configuración de Firebase (reemplaza con tu propia configuración)
const firebaseConfig = {
    // ...
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para guardar un nuevo vehículo
export const save = (vehiculo) => {
    addDoc(collection(db, 'Vehiculos'), vehiculo);
};

// Función para obtener todos los vehículos
export const getData = (callback) => {
    onSnapshot(collection(db, 'Vehiculos'), callback);
};

// Función para eliminar un vehículo
export const remove = (id) => {
    deleteDoc(doc(db, 'Vehiculos', id));
};

// Función para seleccionar un vehículo
export const selectOne = (id) => getDoc(doc(db, 'Vehiculos', id));

// Función para editar un vehículo
export const edit = (id, vehiculo) => {
    updateDoc(doc(db, 'Vehiculos', id), vehiculo);
};