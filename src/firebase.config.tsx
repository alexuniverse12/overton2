import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7XW_52ZKFUGd9Kh_CuhT2BI0U1H1ByAo",
  authDomain: "overton-48000.firebaseapp.com",
  projectId: "overton-48000",
  storageBucket: "overton-48000.appspot.com",
  messagingSenderId: "95087099117",
  appId: "1:95087099117:web:375795d6f24f216263a0e4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);




// const firebaseConfig = {
//   apiKey: "AIzaSyBFHqzSpoDoWl31mK3hwNFI2lBSGyuMi3o",
//   authDomain: "onlytask-a4cc0.firebaseapp.com",
//   databaseURL: "https://onlytask-a4cc0-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "onlytask-a4cc0",
//   storageBucket: "onlytask-a4cc0.appspot.com",
//   messagingSenderId: "726685170711",
//   appId: "1:726685170711:web:87d1e62c87fbc8a0033052"
// };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
