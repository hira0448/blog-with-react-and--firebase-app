import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1ilbqSTpgu3U95S-1EHkmmODOvz_Lnv0",
  authDomain: "blog-9e488.firebaseapp.com",
  projectId: "blog-9e488",
  storageBucket: "blog-9e488.appspot.com",
  messagingSenderId: "37816187758",
  appId: "1:37816187758:web:87f333402ce0fea27d5f7f",
};

const app = initializeApp(firebaseConfig);
initializeFirestore(app, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
