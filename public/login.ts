let objArray: Array<Usuario> = new Array();
let arrayLargo: number;


interface Usuario{
  password: string;
  nombre: string;
  email: string;
  lvl: boolean;
}


let admin: Usuario = {
  password: "p",
  nombre: "admin",
  email: "e",
  lvl: true
}

let comUser: Usuario = {

  password: "p1",
  nombre: "user",
  email: "e1",
  lvl: false
}
arrayLargo = objArray.push(admin);
arrayLargo = objArray.push(comUser);

/*
agregarUsr(admin);

agregarUsr(comUser);
*/
function mostrarCuentas() {
  console.clear();  
  for (let i = 0; i < objArray.length; i++) {
    console.log(objArray[i]);
  } //por consola
}

function isAdmin(usr: Usuario) {
  if (usr.lvl)
    return true;
  else return false;
}

function Login(usr:Usuario){
  if(isAdmin(usr)){
    location.href = "index.html";
  }
}

function capturaDatos(nombre: string, email: string, passwd: string) {
  let newUser: Usuario = {
    password : "null",
    nombre : "null",
    email : "null",
    lvl : false
  }
  newUser.email = email;
  newUser.nombre = nombre;
  newUser.password = passwd;
  
  console.log(newUser);
  console.clear();

  for (let i = 0;i< objArray.length; i++){
    console.log(objArray[i]);
    if (objArray[i].email === newUser.email || objArray[i].nombre === newUser.nombre) {
      alert("El user EXISTE");
      return;
      
    }
  }
  console.log(newUser)
  objArray.push(newUser);
  alert("Registro exitoso!");
  location.href = "inicio.html";
}

function validarUser(user: Usuario) {

  for (let i = 0; i < objArray.length; i++){
    console.log(objArray[i]);
    if (objArray[i].nombre === user.nombre && objArray[i].email === user.email){
      break;
    }
  }
  arrayLargo = objArray.push(user);
}


function validarLogin(email :string, passwd :string) {
  for (let i = 0; i < objArray.length; i++){
    if (objArray[i].email === email && objArray[i].password === passwd) {
      if (isAdmin(buscarUser(email,passwd))) {
        location.href = "adminview.html";
      } else {
        location.href = "index.html";
      }
    }
  }
}
/*
function buscarUser(email: string, passwd: string) {
  
  for (let i = 0; i < objArray.length; i++) {
    if (objArray[i].email === email && objArray[i].password === passwd) {
      return objArray[i];
    }
  }
  
  return ;
}*/
function buscarUser(email: string, passwd: string) {
  let u: Usuario = {
    password : "null",
    nombre : "null",
    email : "null",
    lvl : false
  }
  for (let i = 0; i < objArray.length; i++){
    if (objArray[i].email === email && objArray[i].password === passwd) {
      return objArray[i];
    }
  }
  return u;
}