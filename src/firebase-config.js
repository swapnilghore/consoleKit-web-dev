import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
 
};

// Initialize Firebase only if no app has been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
