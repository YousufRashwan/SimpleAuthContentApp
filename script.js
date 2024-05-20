// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmnCt4ke4Vy55YE0F4RFc6yc9ac-6da2A",
  authDomain: "basic-content-sharing.firebaseapp.com",
  projectId: "basic-content-sharing",
  storageBucket: "basic-content-sharing.appspot.com",
  messagingSenderId: "282179220586",
  appId: "1:282179220586:web:7362007e7ec4e2b41d0613",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Register function
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User registered:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error registering:", error);
    });
}

// Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
}

// Logout function
function logout() {
  auth
    .signOut()
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
}

// Auth state listener, but why ??????
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User is signed in:", user);
  } else {
    console.log("No user is signed in");
  }
});
