import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(userName, password, firstName, lastName) {
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getUsername() {
    return this.userName;
  }
}

// login functionality
let loginForm = document.getElementById("login_form");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = new User(userName, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "../note.html"   //"..note.html";
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
 
// register functionality
let regForm = document.getElementById("register_form");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let user = new User(userName, password, firstName, lastName);

  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "login.html";
  })
  .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })
}