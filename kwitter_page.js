//YOUR FIRE BASE LINKS
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


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
    }