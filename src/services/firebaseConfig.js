// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1H0Im-jReTGgnLDFQ7YqsrPUvdIxF9QM",
  authDomain: "ecommerce-react-e152c.firebaseapp.com",
  projectId: "ecommerce-react-e152c",
  storageBucket: "ecommerce-react-e152c.appspot.com",
  messagingSenderId: "549969788299",
  appId: "1:549969788299:web:2a39a130eaa43024d7c38e"
};


//apiKey: import.meta.env.VITE_APP_APIKEY,
//authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
//projectId: import.meta.env.VITE_APP_PROJECTID,
//storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
//messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
//appId:import.meta.env. VITE_APP_APPID,

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)