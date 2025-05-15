
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdST_YnICM99nd_tuwuBz5tqIO7ZSg7kg",
  authDomain: "certificategenerator-d659f.firebaseapp.com",
  projectId: "certificategenerator-d659f",
  storageBucket: "certificategenerator-d659f.firebasestorage.app",
  messagingSenderId: "274020814027",
  appId: "1:274020814027:web:32486c91cfabe149585f4e",
  measurementId: "G-S1SPHVEL8X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCdST_YnICM99nd_tuwuBz5tqIO7ZSg7kg",
//   authDomain: "certificategenerator-d659f.firebaseapp.com",
//   projectId: "certificategenerator-d659f",
//   storageBucket: "certificategenerator-d659f.firebasestorage.app",
//   messagingSenderId: "274020814027",
//   appId: "1:274020814027:web:32486c91cfabe149585f4e",
//   measurementId: "G-S1SPHVEL8X"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);