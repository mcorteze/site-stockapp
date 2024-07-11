// firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC9im7BcsSPGeVuQUCcy6O04pyscuR7PXM",
  authDomain: "stockapp-2086d.firebaseapp.com",
  databaseURL: "https://stockapp-2086d-default-rtdb.firebaseio.com",
  projectId: "stockapp-2086d",
  storageBucket: "stockapp-2086d.appspot.com",
  messagingSenderId: "803967376587",
  appId: "1:803967376587:web:72fe345f762f91e2004f4e",
  measurementId: "G-9K2WF4MXBQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Obtén una referencia a la base de datos

export { app, db }; // Exporta la instancia de la aplicación Firebase y la referencia a la base de datos
