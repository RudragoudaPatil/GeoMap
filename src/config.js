import Firebase from 'firebase';
let config={
    apiKey: "AIzaSyCF1_lfi2fwFW1A8R08zV08sWsUzpEAQ9E",
    authDomain: "fir-demo-538be.firebaseapp.com",
    databaseURL: "https://fir-demo-538be.firebaseio.com",
    projectId: "fir-demo-538be",
    storageBucket: "fir-demo-538be.appspot.com",
    messagingSenderId: "1033693710840"

};
let app = Firebase.initializeApp(config);
export const db = app.database();