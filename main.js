var firebaseConfig = {
    apiKey: "AIzaSyB26NkEYRffW1jSbNbglfUhwUPj-aXvbko",
    authDomain: "flashchat-firebase-andro-6558d.firebaseapp.com",
    databaseURL: "https://flashchat-firebase-andro-6558d.firebaseio.com",
    projectId: "flashchat-firebase-andro-6558d",
    storageBucket: "flashchat-firebase-andro-6558d.appspot.com",
    messagingSenderId: "611671793498",
    appId: "1:611671793498:web:ce8b17f46b31f5fca49d63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  const messageRef = firebase.database().ref();

  //Form Data 
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = getValueById('name');
    let company = getValueById('company');
    let email = getValueById('email');
    let phone = getValueById('phone');
    let message = getValueById('message');

    let messageObj = {
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    }
    
    saveMessage(messageObj);
    contactForm.reset();
    const savedMessage = document.querySelector('.contact .saved');
    savedMessage.style.display = 'block';
    setTimeout(() => {
        savedMessage.style.display = 'none';
    }, 900);
});

  
  
//saving message to firebase
function saveMessage(msg){
    const result = messageRef.push().set(msg);
    console.log(result);
}




//Get Element By Id function 
function getValueById(id){
    return document.getElementById(id).value;
}