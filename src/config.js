import Firebase from 'firebase';

let config = {
    piKey: "AIzaSyDGTdMJzZWkGrIEYB3ZKivG1mgL_Om0TJA",
    authDomain: "nics-apps.firebaseapp.com",
    databaseURL: "https://nics-apps.firebaseio.com",
    projectId: "nics-apps",
    storageBucket: "nics-apps.appspot.com",
    messagingSenderId: "438379245764",
    appId: "1:438379245764:web:16456bb9fc74eaf27f1991",
    measurementId: "G-S8SEPZT8BC"
};

let app = Firebase.initializeApp(config);
export const db = app.database();