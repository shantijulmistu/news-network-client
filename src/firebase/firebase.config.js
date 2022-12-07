// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQbDHWm_8Qovn-vze72jzGBd7wpuHdgDg",
    authDomain: "news-network-a3a1d.firebaseapp.com",
    projectId: "news-network-a3a1d",
    storageBucket: "news-network-a3a1d.appspot.com",
    messagingSenderId: "361367808673",
    appId: "1:361367808673:web:eeca3b4ec9092391b3dee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;