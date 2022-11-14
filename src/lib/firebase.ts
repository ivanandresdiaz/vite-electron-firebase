/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import localforage from "localforage";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  //  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword, signOut,
  // onAuthStateChanged
} from "firebase/auth";

const production = {
  API_KEY: "",
  AUTH_DOMAIN: "",
  PROJECT_ID: "",
  STORAGE_BUCKET: "",
  MESSAGING_SENDER_ID: "",
  APP_ID: "",
};
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = production;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  // databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth: any = getAuth();
console.log("initilize app");

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const functions = getFunctions(app);

export {
  db,
  storage,
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  functions,
  app,
  // firebaseCloudMessaging,
};
