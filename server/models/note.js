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
  
  function getNotes() {
    return notes;
  }
  
//   function login(user) { // {userName: "sda", password: "gsdhjsga"}
//     let cUser = users.filter( u => u.userName === user.userName);
    
//     if(!cUser[0]) throw Error("Username not found");
//     if(cUser[0].password !== user.password) throw Error("Password incorrect");
  
//     return cUser[0];
//   }
  
  module.exports = { getNotes};