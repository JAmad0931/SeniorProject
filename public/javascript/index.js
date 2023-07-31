
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, connectAuthEmulator, onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyASUGgzfL-gg4ADwpC_itACWC20rWJkhg8",
  authDomain: "seniorproject-e4cf0.firebaseapp.com",
  projectId: "seniorproject-e4cf0",
  storageBucket: "seniorproject-e4cf0.appspot.com",
  messagingSenderId: "550383984809",
  appId: "1:550383984809:web:b8ae4d506d159b1e9c09b8",
  measurementId: "G-BNL2PXNHZM"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

//Redirect functions
function redirectSignedIn (){
  window.location.assign("signedInPage.html");
}
function redirectLogin (){
  window.location.assign("login.html");
}


// Login using email and password
document.addEventListener("DOMContentLoaded", function() {
  const txtEmail = document.querySelector('#email');
  const txtPassword = document.querySelector('#pwd');
  const btnLogin = document.getElementById('btnLogin');

  const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;
  
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    redirectSignedIn();
    console.log(userCredential.user);
  }
   btnLogin.addEventListener("click", loginEmailPassword);
});

// Create Account
document.addEventListener("DOMContentLoaded", function() {
  const txtEmail = document.querySelector('#email');
  const txtPassword = document.querySelector('#pwd');
  const btnSignup = document.getElementById('btnSignup');

  const createAccount = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    const userCredential= await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    redirectSignedIn();
    console.log(userCredential.user);
  }
  btnSignup.addEventListener("click", createAccount);
});

//Updating UI
document.addEventListener("DOMContentLoaded", function() {

  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if(user) {
        console.log(user);
      

      } else{
        
      }
    });
  }
  monitorAuthState();
});

// Log out
document.addEventListener("DOMContentLoaded", function() {
  const btnLogout = document.getElementById('btnLogout');
  const logout = async () => {
    await signOut(auth);
    redirectLogin();
  }
  btnLogout.addEventListener('click', logout);
});