import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const app= firebase.initializeApp({
    apiKey: "AIzaSyAUnn4eX_gvGy4PrSOFr2KZMb5pr7XKkow",
    authDomain: "react-gallery-d3484.firebaseapp.com",
    projectId: "react-gallery-d3484",
    storageBucket: "react-gallery-d3484.appspot.com",
    messagingSenderId: "255239896430",
    appId: "1:255239896430:web:0e3b52a109db8c00cb157f"
});

export const storage =firebase.storage();
export const firestore =firebase.firestore();
export const timestamp =firebase.firestore.FieldValue.serverTimestamp;

export default app;