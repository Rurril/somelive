
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyDOJ21AuwLTdswlr_nPCPsFhNAU5_lPExE",
  authDomain: "somelive-47ebb.firebaseapp.com",
  projectId: "somelive-47ebb",
  storageBucket: "somelive-47ebb.firebasestorage.app",
  messagingSenderId: "663712232888",
  appId: "1:663712232888:web:aeb350a4cb12f4d7044b4d",
  measurementId: "G-KZC12D77H9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
