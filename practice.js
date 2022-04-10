var firebaseConfig = {
    apiKey: "AIzaSyCgv0KrurFpivIlF6VrC0gZP3xtOJlh2dI",
    authDomain: "class-test-9ab3a.firebaseapp.com",
    databaseURL: "https://class-test-9ab3a-default-rtdb.firebaseio.com",
    projectId: "class-test-9ab3a",
    storageBucket: "class-test-9ab3a.appspot.com",
    messagingSenderId: "329164556925",
    appId: "1:329164556925:web:79c7f63ab80f4f6b497f14"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
         purpose:"adding user" 
      });
      }
//ADD YOUR FIREBASE LINKS