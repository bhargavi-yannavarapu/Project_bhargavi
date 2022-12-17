import { fetchData, getCurrentUser, setCurrentUser } from './main.js'

// user class
class User {
  constructor(noteContent) {
    this.noteContent = noteContent;
  }
}

// login functionality
let noteForm = document.getElementById("note_form");
if(noteForm) noteForm.addEventListener('submit', saveNote);

let user1 = getCurrentUser();
console.log(user1)

let userID = user1.userID;
console.log(userID);

function saveNote(e) {
  e.preventDefault();

  //let userID = document.getElementById("userID").value;
  let noteContent = document.getElementById("note").value;
  let note = new User(noteContent);
  let note_ = note.noteContent;
  let user_ = user1.userID
  let data1 = {user_,note_}

  console.log(data1)

  fetchData("/notes/insert", data1, "POST")
  .then((data1) => {
    window.location.replace = "login.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}