//USERNAME AND PASSWORD PART

function myFunction() {
  let x = document.getElementById("passw");
  let y = document.getElementById("userName")
  if (x.value == "123" && y.value == "omer") {
    window.location.href = "homePage.html";

  } else {
    alert("Hey, your password or user name is not correct!!!");
  }
}


//REGISTRATION PART


function registration() {

  let firstName = document.getElementById("fname").value;
  let secondName = document.getElementById("sname").value;
  let userName = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let psw = document.getElementById("psw").value;
  let rpsw = document.getElementById("rpsw").value;

  if (firstName == '') {
    alert('Please enter your name!');
  }
  else if (secondName == '') {
    alert('Please enter your second name!');
  }
  else if (userName == '') {
    alert('Please enter your user name!');
  }
  else if (email == '') {
    alert('Please enter your email address!')
  }
  else if (psw == '') {
    alert('Please enter your password!')
  }
  else if (rpsw == '') {
    alert('Please enter confirmation password!')
  }
  else if (psw != rpsw) {
    alert('Password not Matched');
  }
  else {
    alert("You are ready for login")
    window.location = "index.html";

  }
}

//HOME PAGE PART

let button = document.getElementById("enterMessage");
let message = " ";
let container = document.getElementById("container");


button.onclick = function () {
  let currentdate = new Date();
  let datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " <==> "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds() 

  message = "<b>WELCOME ÖMER </b><br> <br><h3>"+document.getElementById("message").value + "</h3><br><br><p><==>"+ datetime +"</p> <hr>"  +message;
  console.log(message);
  container.innerHTML = message;
  document.getElementById("message").value = "";
  document.getElementById("message").focus();
  
}


