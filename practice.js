const firebaseConfig = {
    apiKey: "AIzaSyBw3nnCycMwM_2jeyv02GO3iDpXaeOmgII",
    authDomain: "kiwiter-88e9d.firebaseapp.com",
    databaseURL: "https://kiwiter-88e9d-default-rtdb.firebaseio.com",
    projectId: "kiwiter-88e9d",
    storageBucket: "kiwiter-88e9d.appspot.com",
    messagingSenderId: "244746232928",
    appId: "1:244746232928:web:55a74a17528a55e532cf05",
    measurementId: "G-2QH3VCP065"
  };

  firebase.initializeApp(firebaseConfig);
  
   function addUser(){
        userName = document.getElementById("userName").value;
        firebase.database().ref("/").child(userName).update({
            purpose : "adicionar usuário"
        });
    }