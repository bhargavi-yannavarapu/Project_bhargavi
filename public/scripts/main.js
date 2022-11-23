// document.getElementById("btn-users").addEventListener('click', getUsers);

// var nts = document.getElementById("btn-notes");
// if(nts){
//   nts.addEventListener('click', getNotes);
// }

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
    constructor(firstname, lastname, username, password, note) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
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
  
  // grab the form, add event listener
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