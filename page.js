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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    userName = localStorage.getItem("useName");
    roomName = localStorage.getItem("roomName");

function send() 
{
msg =document.getElementById("msg").value;
firebase.database().ref(roomName).push({
    name:userName,
    message:msg,
    like: 0
});
 
document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebaseMessageId = childKey;
       messageData = childData;
//Início do código
       console.log(firebaseMessageId);
       console.log(messageData);
       name = messageData['like'];
       message = messageData['message'];
       like = messageData['like'];
       nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
       messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
       spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
       row = nameWithTag + messageWithTag +like_button + spanWithTag;
       document.getElementById("output").innerHTML += row;
//Fim do código
    } });  }); }
getData();


function logout() 
{
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location.replace("index.html");
}
