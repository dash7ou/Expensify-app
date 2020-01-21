import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDMqXtUKeywwXDhFm5JvokwTxAfG6dboQI",
    authDomain: "expensify-2020.firebaseapp.com",
    databaseURL: "https://expensify-2020.firebaseio.com",
    projectId: "expensify-2020",
    storageBucket: "expensify-2020.appspot.com",
    messagingSenderId: "568209070857",
    appId: "1:568209070857:web:69eab74bdb3164050dd1d8",
    measurementId: "G-FEEZ0Q20F9"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


export {firebase, database as default}
