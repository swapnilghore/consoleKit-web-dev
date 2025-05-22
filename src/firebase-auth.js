// firebase-auth.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider } from "firebase/auth";

// ✅ Replace these with your actual Firebase config values
const firebaseConfig = {
    apiKey: "AIzaSyDH4MACMxTN2oDU-TDCyfB15KtI_qCN6bk",
    authDomain: "consolekit-856b7.firebaseapp.com",
    projectId: "consolekit-856b7",
    storageBucket: "consolekit-856b7.firebasestorage.app",
    messagingSenderId: "565436695626",
    appId: "1:565436695626:web:86e2b35d2e1cb218ebd2b3",
    measurementId: "G-YRJHPDT4W1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Google Sign-In Success:", user);
        return user;
    } catch (error) {
        console.error("Google Sign-In Error:", error);
        throw error;
    }
};



const apple_provider = new OAuthProvider("apple.com");
const apple_auth = getAuth(app);

export const signInWithApple = async () => {
  try {
    const result = await signInWithPopup(apple_provider, apple_auth);
    const user = result.user;
    console.log("Apple User:", user);
    alert(`Welcome ${user.displayName || user.email}`);
  } catch (error) {
    console.error("Apple Login Error", error);
    alert("Apple login failed");
  }
};

export default auth;
