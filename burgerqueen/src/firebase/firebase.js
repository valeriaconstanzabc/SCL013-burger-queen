import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkXsBAwpsiN6vMlxaZMT0fGpmTthWGqlk",
    authDomain: "burger-queen-2bad6.firebaseapp.com",
    databaseURL: "https://burger-queen-2bad6.firebaseio.com",
    projectId: "burger-queen-2bad6",
    storageBucket: "burger-queen-2bad6.appspot.com",
    messagingSenderId: "1065820294806",
    appId: "1:1065820294806:web:c2025de023caeee03dbcb7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}