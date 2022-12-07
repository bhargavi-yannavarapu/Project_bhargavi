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
  let notes = await con.query(sql);
  console.log(notes)
}

  // function getAllNotes() {
  //   return notes;
  // }

async function insertNotes(note) {
  console.log(note)
  let cNote = await getNote(note);
  if(cNote.length > 0) throw Error("Note already exists");
  const sql = `INSERT INTO notes (noteContent, noteID)
    VALUES ('${note.noteContent}', ${note.noteID});
  `
  await con.query(sql);
  return await login(note);
}
  
  function note(note) { // {userName: "sda", password: "gsdhjsga"}
    let Unotes = notes.filter( u => u.note === note.note);
    
    if(!Unotes[0]) throw Error("Note not found");
    // if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return Unotes[0];
  }

  async function getNote(note) {
    let sql;
  
    if(note.noteID) {
      sql = `
        SELECT * FROM notes
         WHERE noteID = ${note.noteID}
      `
    } else {
      sql = `
      SELECT * FROM notes 
        WHERE noteContent = "${note.noteContent}"
    `;
    }
    return await con.query(sql);  
  }
  
  module.exports = { getAllNotes, note, getNote, insertNotes};