import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const fbConfig = {
  apiKey: "AIzaSyB0ktDYDfDufqcr8hsSgnocoo9imrMppIc",
  authDomain: "fir-tutorial-d729c.firebaseapp.com",
  databaseURL: "https://fir-tutorial-d729c.firebaseio.com",
  projectId: "fir-tutorial-d729c",
  storageBucket: "fir-tutorial-d729c.appspot.com",
  messagingSenderId: "918010698381",
  appId: "1:918010698381:web:db412ad54a6d79fc92a0c4",
  measurementId: "G-4SG88J5XM2",
};
// Initialize Firebase
firebase.initializeApp(fbConfig);

export const projectFireStore = firebase.firestore();

//Settings of firestore(just an update that tell the firebase how firestore work with timestamps)
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
