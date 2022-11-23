// "database" as object literal
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
  
  function getAllNotes() {
    return notes;
  }
  
  function Notes(note) { // {userName: "sda", password: "gsdhjsga"}
    let Unotes = notes.filter( u => u.note === notes.note);
    
    if(!Unotes[0]) throw Error("Note not found");
    // if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
    return Unotes[0];
  }
  
  module.exports = { getAllNotes, Notes};