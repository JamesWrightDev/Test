import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCy1Zh4QxLUcSA9afR3WJB3PpgSoLEjQbM",
  authDomain: "storetest-613f3.firebaseapp.com",
  databaseURL: "https://storetest-613f3.firebaseio.com",
  projectId: "storetest-613f3",
  storageBucket: "storetest-613f3.appspot.com",
  messagingSenderId: "396802029992",
  appId: "1:396802029992:web:050568ea452e6023f6c59d",
  measurementId: "G-E72Z9RQCYJ",
};

try{
   firebase.initializeApp(firebaseConfig);
}catch(e) {
  console.log(e);
}

export const fb = firebase;

export const provider = new firebase.auth.GoogleAuthProvider();

export const getToken = async () => {
  if (!fb.auth().currentUser) {
    return null;
  }
  return await fb.auth().currentUser.getIdToken(true);
};
