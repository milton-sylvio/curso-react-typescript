import firebase from 'firebase/app';
import firebaseConfig from './configs/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
