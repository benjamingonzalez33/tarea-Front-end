import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDF9vpKsbhviAPfJOyh3rIuTXlbuwGc3wM",
  authDomain: "tarea-firebase-c2d31.firebaseapp.com",
  projectId: "tarea-firebase-c2d31",
  storageBucket: "tarea-firebase-c2d31.appspot.com",
  messagingSenderId: "85825275210",
  appId: "1:85825275210:web:97b697167f36981d3a6db3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para guardar un nuevo vehículo
export const guardarVehiculo = (vehiculo) => {
    return addDoc(collection(db, 'Vehiculos'), vehiculo);
}

// Función para obtener todos los vehículos
export const obtenerVehiculos = (callback) => {
    onSnapshot(collection(db, 'Vehiculos'), callback);
}

// Función para eliminar un vehículo
export const eliminarVehiculo = (id) => {
    return deleteDoc(doc(db, 'Vehiculos', id));
}

// Función para seleccionar un vehículo
export const obtenerVehiculo = (id) => {
    return getDoc(doc(db, 'Vehiculos', id));
}

// Función para editar un vehículo
export const editarVehiculo = (id, vehiculo) => {
    return updateDoc(doc(db, 'Vehiculos', id), vehiculo);
}