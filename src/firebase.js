// import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
// import 'firebase/compat/auth';


var firebaseConfig = {
  // apiKey: "AIzaSyCdQZ0UAGR8jOIrq4FjEDbIO7E_31_rwrk",
  // authDomain: "contact-form-bf513.firebaseapp.com",
  // databaseURL: "https://contact-form-bf513-default-rtdb.firebaseio.com",
  // projectId: "contact-form-bf513",
  // storageBucket: "contact-form-bf513.appspot.com",
  // messagingSenderId: "531061036190",
  // appId: "1:531061036190:web:b0d94e1e29df676823578f"

  apiKey: "AIzaSyBWY7T01nWHIzcJsUcklbBHHn2apCVh0Uo",
  authDomain: "fornodejs.firebaseapp.com",
  databaseURL: "https://fornodejs.firebaseio.com",
  projectId: "fornodejs",
  storageBucket: "fornodejs.appspot.com",
  messagingSenderId: "132742348810",
  appId: "1:132742348810:web:2ed29ac50d8f33f4645ff3",
  measurementId: "G-R1H5JTJKKH"
};


firebase.initializeApp(firebaseConfig);
export default firebase;
