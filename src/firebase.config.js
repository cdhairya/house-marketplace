import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgU8Z4p4KIwKCRJ4bfoqZ_53ScJccVL_4",
  authDomain: "house-marketplace-79cb9.firebaseapp.com",
  projectId: "house-marketplace-79cb9",
  storageBucket: "house-marketplace-79cb9.appspot.com",
  messagingSenderId: "244545822929",
  appId: "1:244545822929:web:ab9f0922efd0d704f625f0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
