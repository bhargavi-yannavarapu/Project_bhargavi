// "database" as object literal

const con = require("./db_connect");

async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    userID INT NOT NULL,
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(noteID) references users(userID)
  ); `
  await con.query(sql);
}
createTable();

/*
const notes = [
    {
      username: "cathy123",
      noteId : 123,
      note: "Let yourself feel again!"
    },
    {
      username: "fredburger",
      noteId : 345,
      note: "Your life impacts more people than you realize."
    },
    {
      username: "bobbyjones",
      noteId : 567,
      note: "Let your dreams and plans change."
    }
  ];
  
*/

// grabbing all users in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
    // console.log(notes)
  return await con.query(sql)
}

  // function getAllNotes() {
  //   return notes;
  // }

async function insertNote(note) {
  console.log("line no 50",note)
  let cNote = await getNote(note);
  if(cNote.length > 0);
  const sql = `INSERT INTO notes (noteContent, userID)
    VALUES ('${note.noteContent}', ${note.userID});
  `
  await con.query(sql);
  return await getNote(note);
}
 

// Update User function
async function editNote(note) {
  console.log(note)
  let sql = `UPDATE notes 
    SET noteContent = "${note.noteContent}"
    WHERE userID = ${note.userID}
  `;
  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete User function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}
  `
  await con.query(sql);
}

function note(note) { // {userName: "sda", password: "gsdhjsga"}
  let Unotes = notes.filter( u => u.note === note.note);
  
  if(!Unotes[0]) throw Error("Note not found");
  // if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return Unotes[0];
}

async function getNote(note) {
  let sql;
    sql = `
      SELECT * FROM notes
        WHERE userID = ${note.userID}
    `
    return await con.query(sql);  
  } 
  
module.exports = { getAllNotes, note, getNote, insertNote, editNote, deleteNote};