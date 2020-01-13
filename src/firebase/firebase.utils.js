import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsXkxgdX6WcqtZay_J7QAucJgVz8eCNKI",
    authDomain: "eccommerce-3b86b.firebaseapp.com",
    databaseURL: "https://eccommerce-3b86b.firebaseio.com",
    projectId: "eccommerce-3b86b",
    storageBucket: "eccommerce-3b86b.appspot.com",
    messagingSenderId: "344491320001",
    appId: "1:344491320001:web:2c2f71f12d19e1750daa40",
    measurementId: "G-K91VP0F5DK"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
