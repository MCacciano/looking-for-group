import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import defaultUserIcon from '../assets/images/default-user-icon-2.jpg';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const createUserProfileDocument = async (
  userAuth = null,
  additionalData = {}
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName: displayName || email,
        email,
        createdAt,
        avatar: defaultUserIcon,
        ...additionalData
      });
    } catch (err) {
      console.log(`Error creating user`, err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providers = {
  google: new firebase.auth.GoogleAuthProvider()
};

// always prompt for google auth when using this provider
providers.google.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(providers.google);

export default firebase;
