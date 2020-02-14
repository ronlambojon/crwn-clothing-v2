import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth'; //auth

const config = {
  apiKey: "AIzaSyCTDnl32C_nWnpofbjDfSzT-3h0g_0dnSI",
  authDomain: "crwn-db-53f0d.firebaseapp.com",
  databaseURL: "https://crwn-db-53f0d.firebaseio.com",
  projectId: "crwn-db-53f0d",
  storageBucket: "crwn-db-53f0d.appspot.com",
  messagingSenderId: "929261080997",
  appId: "1:929261080997:web:61c3c790759bb9402a184c",
  measurementId: "G-DEYRE9EXZC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;