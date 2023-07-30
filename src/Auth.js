import firebase from 'firebase/app';
import { auth } from './firebaseConfig';

class Auth {
  signInWithEmailAndPassword(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  signUpWithEmailAndPassword(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  }

  signOut() {
    return auth.signOut();
  }
}

export default Auth;
