const firebaseConfig = {
    apiKey: "AIzaSyBkqqGY8f8jC0mwFCql5O5hD7enmAPYTag",
    authDomain: "register-45a34.firebaseapp.com",
    databaseURL: "https://register-45a34-default-rtdb.firebaseio.com",
    projectId: "register-45a34",
    storageBucket: "register-45a34.appspot.com",
    messagingSenderId: "202011991268",
    appId: "1:202011991268:web:738fddec766d1467b3e0f1",
    measurementId: "G-471MSSNGHF"
  };

  //initialize database
  firebase.initializeApp(firebaseConfig);

  //refernce database
  var register_pageDB = firebase.database().ref("regform");

  document.getElementById('regform').addEventListener("submit",submitform);

  function submitform(e){
    e.preventDefault();

    var indi=getElementByVal('indi');
    var fore=getElementByVal('fore');
    var name=getElementByVal('name');
    var age=getElementByVal('age');
    var gender=getElementByVal('gender');
    var phone=getElementByVal('phone');
    var emailid=getElementByVal('emailid');
    var pass=getElementByVal('pass');
    var add=getElementByVal('add');
    var idproof=getElementByVal('idproof');
    var file=getElementByVal('file');

    saveMessages(indi, fore, name, age, gender, phone, emailid, pass, add, idproof, file);
    // console.log(indi, fore, name, age, gender, phone, emailid, pass, add, idproof, file);

    //enable alert
    document.querySelector('.alert').style.display="block";

    //remove alert
    setTimeout(()=>{
      document.querySelector('.alert').style.display="none";
    },3000);

    //reset the form
    document.getElementById('regform').reset();
  }

  var form = document.getElementById("regform");

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform any necessary form validation and data processing here
      
      // Redirect to the home page
      window.location.href = "index.html";
  });

  const saveMessages=(indi, fore, name, age, gender, phone, emailid, pass, add, idproof, file)=>{
    var newRegForm = register_pageDB.push();

    newRegForm.set({
        indi: indi,
        fore: fore,
        name: name,
        age: age,
        gender: gender,
        phone: phone,
        emailid: emailid,
        pass: pass,
        add: add,
        idproof: idproof,
        file: file,

    });
};
  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  }