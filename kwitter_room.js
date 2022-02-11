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
    firebase.initializeApp(firebaseConfig);

Username=localStorage.getItem("Username");
document.getElementById("user_name").innerHTML="Welcome " +Username+ " to kwitter"

function addroom() {
      roomname=document.getElementById("room_name").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"add-room"
      })
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names+"</div>"
      document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();

function redirecttoroom(name){
console.log(name)
localStorage.setItem("roomname",name      )
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("Username")
      localStorage.removeItem("roomname")
      window.location="index.html"
}