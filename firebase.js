import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-oTZ6ceKCEmPon1XRsjFQm7JdFvBGfwA",
    authDomain: "clone-nextjs-deb40.firebaseapp.com",
    projectId: "clone-nextjs-deb40",
    storageBucket: "clone-nextjs-deb40.appspot.com",
    messagingSenderId: "257408131174",
    appId: "1:257408131174:web:92f434b8b2f9747d200da7"
};

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = firebaseApp.firestore();

export { db };