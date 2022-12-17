import { fetchData, getCurrentUser } from './main.js'

// user class
class Note {
  constructor(noteContent, userID) {
    this.noteContent = noteContent;
    this.userID = userID;
  }
}

// login functionality
let noteForm = document.getElementById("note_form");
if(noteForm) noteForm.addEventListener('submit', saveNote);

let user1 = getCurrentUser();
console.log("getting current user",user1)


function saveNote(e) {
  e.preventDefault();

  let userID = user1.userID;
  console.log("user id ", userID)
  let noteContent = document.getElementById("note").value;
  let note = new Note(noteContent, userID);
  console.log("line 27", note);
  // let noteContent = note.note_Content;
  // let userID= user1.user_ID
  // let data1 = {userID,noteContent}


  fetchData("/notes/insert", note, "POST")
  .then((note) => {
    window.location.href = "note.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}


/*
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}

let all_notes = document.getElementById("btn-notes");
if(all_notes) all_notes.addEventListener('submit', get_all_notes);

function get_all_notes(e) {
  e.preventDefault();
  fetchData("/notes/", data1, "GET")
  .then((data1) => {
    window.location.replace = "note.html"
  })
  .catch((err) => {
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  }) 
}
*/



