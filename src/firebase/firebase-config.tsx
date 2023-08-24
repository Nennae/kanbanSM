// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyB58TbNyPjshtSobhol43lPgTLdbobbK1c",
authDomain: "kanbansm-e14fe.firebaseapp.com",
projectId: "kanbansm-e14fe",
storageBucket: "kanbansm-e14fe.appspot.com",
messagingSenderId: "866141898502",
appId: "1:866141898502:web:4c1e289502be8fd30a8087",
measurementId: "G-QWLT42KFT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
