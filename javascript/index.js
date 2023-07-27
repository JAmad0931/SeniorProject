import {btnLogin, btnSignup, btnLogout, txtEmail, txtPassword} from './ui.js';
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASUGgzfL-gg4ADwpC_itACWC20rWJkhg8",
  authDomain: "seniorproject-e4cf0.firebaseapp.com",
  projectId: "seniorproject-e4cf0",
  storageBucket: "seniorproject-e4cf0.appspot.com",
  messagingSenderId: "550383984809",
  appId: "1:550383984809:web:b8ae4d506d159b1e9c09b8",
  measurementId: "G-BNL2PXNHZM"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const auth = firebase.auth();
connectAuthEmulator(auth, "http://localhost:9099");

// Login using email and password
const loginEmailPassword = async () => {
  const loginEmail = txtEmail.value;
  const loginPassword = txtPassword.value;

    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
 
}
btnLogin.addEventListener("click", loginEmailPassword);

// Create an account using email/password
const createAccount = async () => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  }
  catch(error){
    console.log(error);
  }
}

btnSignup.addEventListener("click", createAccount);

// Monitors state changes
const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp();
    }
  })
}

monitorAuthState();

// Logout of Account
const logout = async () => {
  await signOut();
}

btnLogout.addEventListener("click", logout);