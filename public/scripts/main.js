// document.getElementById("btn-users").addEventListener('click', getUsers);

// var nts = document.getElementById("btn-notes");
// if(nts){
//   nts.addEventListener('click', getNotes);
// }

/*
const users_button = document.getElementById("btn-users");
if(users_button) users_button.addEventListener("click", getUsers);

document.getElementById("btn-notes").addEventListener('click', getNotes);

function getUsers() {
  fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}

function getNotes() {
  fetch("http://localhost:3000/notes/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
}
*/

/*
let nav = document.querySelector('nav');

if(getCurrentUser()) {
  nav.innerHTML = `
    <ul>
      <li><a href="note.html">Note</a></li>
      <li><a href="profile.html">Profile</a></li>
      <li><a id="logout-btn">Logout</a></li>
    </ul>
  `
} else {
  nav.innerHTML = `
    <ul>
      <li><a href="note.html">Note</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="register.html">Sign Up</a></li>
    </ul>
  `
}
*/

// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  

 
  // user class
  /*
  class Users {
    constructor(firstName, lastName, userName, password, note) {
      this.firstName = firstname;
      this.lastName = lastname;
      this.userName = username;
      this.password = password;
      this.note = note;
    }
  
    getUsername() {
      return this.username;
    }

    getNote() {
      return this.note;
    }
    
  }
  
  // grab the form, add event listener // login functionality
  let loginForm = document.getElementById("login-form");
  if(loginForm) loginForm.addEventListener('submit', login);

  let noteForm = document.getElementById("note_form");
  if(noteForm) loginForm.addEventListener('submit', note);
  
  function login(e) {
    e.preventDefault();
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = new Users(username, password);
  
    fetchData("/users/login", users, "POST")
    .then((data) => {
      setCurrentUser(data);
      console.log(data);
      window.location.href = "login.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    }) 
  }

  function note(e) {
    e.preventDefault();
  
    let username = document.getElementById("username").value;
    let note = document.getElementById("note").value;
    let notes = new Users(username, note);
  
    fetchData("/notes/note", notes, "POST")
    .then((data) => {
      console.log(data);
      window.location.href = "note.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    })
  }

// register functionality
  let regForm = document.getElementById("reg-form");
  if(regForm) regForm.addEventListener('submit', register);

  function register(e){
    e.preventDefault();
    let userName = document.getElementById("username").value();
    let password = document.getElementById("password").value();
    let firstName = document.getElementById("firstname").value();
    let lastName = document.getElementById("lastname").value();
    let user = new Users(firstName, lastName, userName, password);
    
    console.log(user)

    fetchData("/users/register", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      console.log(data);
      window.location.href = "note.html"
    })
    .catch((err)=>{
      console.log(err);
    })
  }
*/


  //logging out
  let logout = document.getElementById("logout-btn");
  if(logout) logout.addEventListener('click', removeCurrentUser)

  // for local storage.
  // stateful mechanism for user
  // logging in a user.
  export function setCurrentUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getting current user function
  export function getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  console.log("Current user : " + getCurrentUser())
  
  // let currentUser = getCurrentUser();
  // console.log(currentUser);

  export function removeCurrentUser(){
    localStorage.removeItem('user')
    window.location.href = "login.html";
  }
