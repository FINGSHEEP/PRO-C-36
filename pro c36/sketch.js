var database;

function setup() {
  canvas  = createCanvas(200,200);
  var firebaseConfig = {
    apiKey: "AIzaSyDtH2jBvpfxHgQFBEcB9uquqKqI5cWPH3M",
    authDomain: "pro-c36.firebaseapp.com",
    databaseURL: "https://pro-c36.firebaseio.com",
    projectId: "pro-c36",
    storageBucket: "pro-c36.appspot.com",
    messagingSenderId: "674884818285",
    appId: "1:674884818285:web:410c3d77251fb3ea12b664"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database;
}

function draw () {
  background(0);
}