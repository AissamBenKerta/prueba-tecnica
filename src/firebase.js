import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC3stlkLAhJGxkidUYo8nB9UwMqGuA42fE",
  authDomain: "prueba-perros-8c880.firebaseapp.com",
  projectId: "prueba-perros-8c880",
  storageBucket: "prueba-perros-8c880.appspot.com",
  messagingSenderId: "20208571448",
  appId: "1:20208571448:web:dd969578191201d25ec2cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dogsCollection = collection(db, 'dogs');

export default dogsCollection