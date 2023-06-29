
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqNqq5k9t-HYneBjoeYSgC51X9uN75Sy8",
  authDomain: "maltimart-ba6fa.firebaseapp.com",
  projectId: "maltimart-ba6fa",
  storageBucket: "maltimart-ba6fa.appspot.com",
  messagingSenderId: "327409355702",
  appId: "1:327409355702:web:c5e7a3f44eb5b573a10f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export default app