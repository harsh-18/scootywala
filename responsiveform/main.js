
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0A6IkM01sOL7pLAdew2KV-A4mq7QSSN4",
    authDomain: "scootywala-dfcac.firebaseapp.com",
    databaseURL: "https://scootywala-dfcac.firebaseio.com",
    projectId: "scootywala-dfcac",
    storageBucket: "scootywala-dfcac.appspot.com",
    messagingSenderId: "798565631194"
  };
  firebase.initializeApp(config);

// Reference messages collection

    var messageRef = firebase.database().ref('messages')

// Listen for form Submit
document.getElementById('contactForm').addEventListener('submit',
submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 sec

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //Clear form

    document.getElementById('contactForm').reset();
}

// function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}
