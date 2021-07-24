import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCMOZOfyW-kyU495J4hhCZaqOcY1q4E0z4",
  authDomain: "react-firebase-auth-a453a.firebaseapp.com",
  projectId: "react-firebase-auth-a453a",
  storageBucket: "react-firebase-auth-a453a.appspot.com",
  messagingSenderId: "808787704161",
  appId: "1:808787704161:web:b810f0664a5bbce447ed20",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
