// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_gjzQLb-bpj7CUC133XhdRW-UMrW-73Q",
  authDomain: "amzon-clone-satya.firebaseapp.com",
  projectId: "amzon-clone-satya",
  storageBucket: "amzon-clone-satya.appspot.com",
  messagingSenderId: "490593104755",
  appId: "1:490593104755:web:71985652fcbe75937a4b06",
  measurementId: "G-FHD6P0MRGY",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

export { db, auth };
