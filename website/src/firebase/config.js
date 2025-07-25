import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8orUuLkffgS3vM81l2orfbr7jgY-Ga9w",
  authDomain: "student-grade-management-app.firebaseapp.com",
  databaseURL: "https://student-grade-management-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-grade-management-app",
  storageBucket: "student-grade-management-app.firebasestorage.app",
  messagingSenderId: "107769738161",
  appId: "1:107769738161:web:ba5df36b6c6affd48bc390",
  measurementId: "G-P10CVQPQDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;