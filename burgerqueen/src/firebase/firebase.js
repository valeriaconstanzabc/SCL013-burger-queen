import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyABPo0mtrl5h8umUHLij7bNQg16I-4-5Hw",
  authDomain: "burger-queen-1d4c6.firebaseapp.com",
  databaseURL: "https://burger-queen-1d4c6.firebaseio.com",
  projectId: "burger-queen-1d4c6",
  storageBucket: "burger-queen-1d4c6.appspot.com",
  messagingSenderId: "571942873573",
  appId: "1:571942873573:web:21df2e9cfb49eba7f6a70c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}
