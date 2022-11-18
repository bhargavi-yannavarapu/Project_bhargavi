document.getElementById("btn-users").addEventListener('click', getUsers);
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

// Fetch method implementation:
async function fetchData(route = '', data = {}, GET) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: GET, // *GET, POST, PUT, DELETE, etc.
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
  class Users {
    constructor(firstname, lastname, username, password) {
      this.firstname = firstname;
      this.lastame = lastame;
      this.username = username;
      this.password = password;
    }
  
    getUsername() {
      return this.username;
    }
    
  }
  
  // grab the form, add event listener
  let loginForm = document.getElementById("login-form");
  if(loginForm) loginForm.addEventListener('submit', login);
  
  function login(e) {
    e.preventDefault();
  
    let userName = document.getElementById("username").value;
    let password = document.getElementById("pswd").value;
    let users = new Users(userName, password);
  
    fetchData("/users/login", users, "POST")
    .then((data) => {
      console.log(data);
      window.location.href = "bmi.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    }) 
  
  }