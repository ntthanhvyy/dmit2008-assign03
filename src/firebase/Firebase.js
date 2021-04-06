import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD6Z7pWJRkgspuMrYVRXCaKIhARgpzN9P0",
    authDomain: "fir-webreact.firebaseapp.com",
    databaseURL: "https://fir-webreact-default-rtdb.firebaseio.com",
    storageBucket: "fir-webreact.appspot.com",
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
