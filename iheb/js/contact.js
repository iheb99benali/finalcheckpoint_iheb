var firebaseConfig = {
    apiKey: "AIzaSyBU9TskGMl_HjcwrveKJm9yyadcKKYmOVM",
    authDomain: "ahla-3f803.firebaseapp.com",
    databaseURL: "https://ahla-3f803.firebaseio.com",
    projectId: "ahla-3f803",
    storageBucket: "",
    messagingSenderId: "652603798146",
    appId: "1:652603798146:web:b247d80d5bb85bfd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 
 
 var messagesRef = firebase.database().ref('ahla-3f803');
  function submitForm(e){
      e.preventDefault();
      var name = document.getElementById('name').value;
      var trackselection = document.getElementById('trackselection').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      saveMessage(name,trackselection,email,phone);

  }
document.getElementById('contact').addEventListener('submit',submitForm);

function saveMessage(name,trackselection,email,phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        trackselection : trackselection,
        email : email,
        phone : phone,

    });
}







