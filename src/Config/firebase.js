import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const DB_CONFIG = {
  apiKey: "AIzaSyAO9IbkyoDp7Jy8yICfS-iCgTVDRAGVZjQ",
  authDomain: "truereaction-f3ed3.firebaseapp.com",
  databaseURL: "https://truereaction-f3ed3.firebaseio.com",
  projectId: "truereaction-f3ed3",
  storageBucket: "truereaction-f3ed3.appspot.com",
  messagingSenderId: "1082993715350",
  appId: "1:1082993715350:web:fc1af9339e493067"
};

class Firebase {
  constructor() {
    app.initializeApp(DB_CONFIG);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login() {
    console.log("this is inside login fucntion");
  }
}

export default new Firebase();
