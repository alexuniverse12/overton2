import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxU1Bm8x74-7igPpzA-P_k3T5sx-BndEc",
  authDomain: "overton-2ced6.firebaseapp.com",
  projectId: "overton-2ced6",
  storageBucket: "overton-2ced6.appspot.com",
  messagingSenderId: "1014628497934",
  appId: "1:1014628497934:web:00a4fd86ff0def0b769a5f"
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
