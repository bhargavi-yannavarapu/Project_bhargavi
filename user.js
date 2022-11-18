const register_form = document.getElementById("register_form");
if(register_form) register_form.addEventListener("submit", UserObject);


const login_form = document.getElementById("login_form");
if(login_form) login_form.addEventListener("submit", UserObject);


const note_form = document.getElementById("note_form");
if(note_form) note_form.addEventListener("submit", UserObject);


function UserObject(e){
    e.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let note = document.getElementById("note").value;
    const newUser = new User(firstname,lastname,username,password,note);
    console.log(newUser);
    // console.log(`firstname = ${firstname}`)
    // console.log(`lastname = ${lastname}`) 
    // console.log(`username = ${username}`) 
    // console.log(`note = ${note}`) 
}


function User(firstname,lastname,username,password,note){
    this.firstname = firstname;
    this.lastname = lastname; //document.getElementById("lastname").value;
    this.username = username; //document.getElementById("username").value;
    this.password = password; //document.getElementById("password").value;
    this.note = note;
}

User.prototype.getFirstName = function(){
    return this.firstname;
}

User.prototype.getLastName = function(){
    return this.lastname;
}

User.prototype.getusername = function(){
    return this.username;
}

User.prototype.getpassword = function(){
   return this.password;
}

User.prototype.getnote = function(){
    return this.note;
}


User.prototype.setFirstName = function(firstname){
    this.firstname = firstname;
}

User.prototype.setLastName = function(lastname){
    this.lastname = lastname;
}

User.prototype.setusername = function(username){
    this.username = username;
}

User.prototype.setpassword = function(password){
   this.password = password;
}

User.prototype.setnote = function(note){
    this.note = note;
}

// let user = new UserObject();
// //user.setFirstName("Becky");
// console.log(user.getFirstName());
// console.log(user.getLastName());
// console.log(user.getusername());
//console.log(user.getpassword());

// const userobject = new User("Bhargavi","Yannavarapu","bhargavi.y","password123");
// userobject.setFirstName("susheel");
// userobject.setLastName("reddy");
// let naam = userobject.getFirstName();
// userobject.setusername(naam);
// console.log(userobject);