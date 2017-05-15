import * as firebase from 'firebase';


export var config = {
  apiKey: "AIzaSyCoUdVIu_yMekq4UxPuEW7jY4pNqTLXt90",
  authDomain: "bebat-d9540.firebaseapp.com",
  databaseURL: "https://bebat-d9540.firebaseio.com",
  projectId: "bebat-d9540",
  storageBucket: "bebat-d9540.appspot.com",
  messagingSenderId: "179875780966"
};
firebase.initializeApp(config);
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
