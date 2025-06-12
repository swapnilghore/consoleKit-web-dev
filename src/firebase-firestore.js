import { getFirestore } from "firebase/firestore";
import {app} from "./firebase-auth";

const db = getFirestore(app);
export default db;
