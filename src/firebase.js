import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVjqc6LkYxrnMKyS8NPNb1B1--ITwuv-4",
  authDomain: "quora-clone2.firebaseapp.com",
  projectId: "quora-clone2",
  storageBucket: "quora-clone2.appspot.com",
  messagingSenderId: "387910829719",
  appId: "1:387910829719:web:f428ba4787b087c8750bd2",
  measurementId: "G-Q35VXDCR1J"
};

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export{auth, provider};
  export default db;
