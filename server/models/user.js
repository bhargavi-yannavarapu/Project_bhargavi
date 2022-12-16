// "database" as object literal

const con = require("./db_connect");

// let configuration = {
//   database: "application" //name -> database is required
// };

async function createTable(){
  let sql = `CREATE TABLE IF NOT EXISTS users(
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  )`
  await con.query(sql);
}

createTable();

/*const users = [
  {
    firstname:"Cathy",
    lastname:"H",
    username: "cathy123",
    password: "icecream"
  },
  {
    firstname:"Fred",
    lastname:"B",
    username: "fredburger",
    password: "badpassword"
  },
  {
    firstname:"Bobby",
    lastname:"J",
    username: "bobbyjones",
    password: "hi"
  }
];
*/

// grabbing all users in database
async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}

// function getAllUsers() {
//   return users;
// }

//Create user  - registering
async function register(user) {
  let cUser = await getUser(user);
  if(cUser.length > 0) throw Error("Username already in use");
  const sql = `INSERT INTO users (userName, firstName, lastName, password)
    VALUES ("${user.userName}", "${user.firstName}", "${user.lastName}", "${user.password}");
  `
  await con.query(sql);
  return await login(user);
}

// Read user - login user
async function login(user) { // {userName: "sda", password: "gsdhjsga"}
  let cUser = await getUser(user); 
  
  if(!cUser[0]) throw Error("Username not found");
  if(cUser[0].password !== user.password) throw Error("Password incorrect");

  return cUser[0];
}

// Update User function
async function editUser(user) {
  console.log(user)
  let sql = `UPDATE users 
    SET userName = "${user.userName}"
    WHERE userID = ${user.userID}
  `;
  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
}

// Useful Functions
async function getUser(user) {
  let sql;

  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE userName = "${user.userName}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getAllUsers, getUser, login, createTable,  register, editUser, deleteUser};