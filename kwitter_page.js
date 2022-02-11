//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAaTszhzf7Rnn1mdTBpxAtB0-CfdM2xPNg",
    authDomain: "letschat-f314f.firebaseapp.com",
    databaseURL: "https://letschat-f314f-default-rtdb.firebaseio.com",
    projectId: "letschat-f314f",
    storageBucket: "letschat-f314f.appspot.com",
    messagingSenderId: "397705041181",
    appId: "1:397705041181:web:bfd1f22ab3099b22693df4"
  };
  
  // Initialize Firebase
  firebasse.initializeApp(firebaseConfig);


    var User_name=localStorage.getItem("Username")
    var room_name=localStorage.getItem("roomname")

    function send(){
          msg=document.getElementById("sendmsg").value
          firebase.database().ref(room_name).push({
                Name:User_name,
                message:msg,
                like:0
          })
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
localStorage.removeItem("Username")
localStorage.removeItem("roomname")
window.location="index.html"
}
