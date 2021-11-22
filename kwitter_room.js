
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyAGY719CawOJxjmZ6K2CnKh6kdiJnMcWa8",
  authDomain: "kwitter-1e16f.firebaseapp.com",
  databaseURL: "https://kwitter-1e16f-default-rtdb.firebaseio.com",
  projectId: "kwitter-1e16f",
  storageBucket: "kwitter-1e16f.appspot.com",
  messagingSenderId: "668500271756",
  appId: "1:668500271756:web:53317577e115a149f5d1a9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
function addRoom(){
  room_name=document.getElementById('room_name').value ;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding user"
  });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       
    });
  });

}

getData();
