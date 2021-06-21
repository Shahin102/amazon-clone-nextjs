import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeyDcszlv5Nt7uxQjsSleZ1IpNWpBdILE",
    authDomain: "nextjsapp-69952.firebaseapp.com",
    projectId: "nextjsapp-69952",
    storageBucket: "nextjsapp-69952.appspot.com",
    messagingSenderId: "313921451391",
    appId: "1:313921451391:web:9a7ba86772c7e64bf1d64a",
    measurementId: "G-9CSXM54GXJ"
};

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = firebaseApp.firestore();

export { db };

