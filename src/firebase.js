import firebase from 'firebase';
import 'firebase/storage'
var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDxZH3ducN-ltHnJ3fLGTVGtl9wbdQqxfs",
        authDomain: "md-coaching-f4361.firebaseapp.com",
        databaseURL: "https://md-coaching-default-rtdb.firebaseio.com",
        projectId: "md-coaching-f4361",
        storageBucket: "md-coaching-f4361.appspot.com",
        messagingSenderId: "579334470987",
        appId: "1:579334470987:web:59fee710cd9f0a5e027cce",
      
});
var db = firebaseApp.firestore();
export { db };