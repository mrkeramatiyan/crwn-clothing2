import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2fA31Oa-5xtJcG7kAzu0ABz1ns_ydbsY",
  authDomain: "crwn-clothing-db-3ff40.firebaseapp.com",
  projectId: "crwn-clothing-db-3ff40",
  storageBucket: "crwn-clothing-db-3ff40.appspot.com",
  messagingSenderId: "815242204964",
  appId: "1:815242204964:web:a423c5930ecae364ea85b1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  try {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      });
    }
    
  } catch (error) {
    console.log('error creating the user', error.message);
  }
};