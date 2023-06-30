const firebaseConfig = {
  apiKey: "AIzaSyCg1L6MoJ4jIKxwJfoIP1PLQ1DSdQ0_Bjg",
  authDomain: "conatct-73d9a.firebaseapp.com",
  databaseURL: "https://conatct-73d9a-default-rtdb.firebaseio.com",
  projectId: "conatct-73d9a",
  storageBucket: "conatct-73d9a.appspot.com",
  messagingSenderId: "721771645125",
  appId: "1:721771645125:web:d456374f3fc8fc89da88ac",
  measurementId: "G-DZ95M2WLVL"
};

//initialize database
firebase.initializeApp(firebaseConfig);

//reference database
var register_pageDB = firebase.database().ref("contact-form");

document.getElementById('contact-form').addEventListener("submit",submitform);

function submitform(e) {
  e.preventDefault();

  var name = getElementByVal('name');
  var email = getElementByVal('email');
  var message = getElementByVal('message');

  saveMessages(name, email, message);

  //enable alert
  document.querySelector('.alert').style.display = "block";

  //remove alert
  setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
  }, 3000);

  //reset the form
  document.getElementById('contact-form').reset();
}

const saveMessages = (name, email, message) => {
  var newRegForm = register_pageDB.push();

  newRegForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementByVal = (id) => {
  return document.getElementById(id).value;
};
