import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  initializeFirestore,
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMn0p8OoExmlZoMRIBq-t-_NPJ_RjpUew",
    authDomain: "big-bazaar-db.firebaseapp.com",
    projectId: "big-bazaar-db",
    storageBucket: "big-bazaar-db.appspot.com",
    messagingSenderId: "786170288600",
    appId: "1:786170288600:web:f68c7099d85c10b5717aad"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () =>signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  // export const db = initializeFirestore(firebaseApp, {
  //   experimentalAutoDetectLongPolling: true
  // });

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    
    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {
          displayName, email, createdAt, ...additionalInformation
        });
      } catch(error) {
        console.log('error creating the user ', error.message);
      }
    }
    return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  };

