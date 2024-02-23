let prism = document.querySelector(".rec-prism");

function showSignup() {
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin() {
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword() {
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe() {
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs() {
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou() {
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

var counter = data.length

function signIn() {
  let email = document.getElementById("username").value
  let pass = document.getElementById("password").value
  let flag = true;
  let flag1 = true;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email) {
      if (data[i].password == pass) {
        flag = false;
        break;
      } else {
        flag1 = false;
        break;
      }
    }
  }
  if (!flag1) {
    // console.log("Wrong pass")
    alert("Wrong password")
  }
  if (!flag) {
    console.log("You can proceed")
    // window.location.href = "http://127.0.0.1:5500/home.html"
    window.location.href = "https://google.com"
    console.log("ok")
  } else {
    // console.log("Please register")
    alert("Register")
    // container.classList.add("right-panel-active");
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
  }
  // console.log(email, pass)
}
function signUp() {
  let email = document.getElementById("email").value
  let password = document.getElementById("pass1").value
  let flag = true;
  for (let i = 0; i < data.length; i++) {
    if (data[i].email == email && data[i].password == password) {
      // console.log("You are already there")
      flag = false;
      break;
    }
  }
  if (flag) {
    data[counter] = {
      "name": name,
      "email": email,
      "password": password
    }
    counter++



  } else {
    // console.log("You are already there")
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";

  }

  // console.log(name, email, password, data)
}