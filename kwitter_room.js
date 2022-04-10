
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyApDQpWiHeQEzRyctCYQ6GDIzp5m7tmbiw",
      authDomain: "class-93-838d0.firebaseapp.com",
      databaseURL: "https://class-93-838d0-default-rtdb.firebaseio.com",
      projectId: "class-93-838d0",
      storageBucket: "class-93-838d0.appspot.com",
      messagingSenderId: "455974443255",
      appId: "1:455974443255:web:c20801589c3e7190325bf2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    function addroom()
    {
     Room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(Room_name).update({
           purpose:"adding room name"
     });
     localStorage.setItem("room_name",Room_name);
     window.location="Kwitter_page.html";

      
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}