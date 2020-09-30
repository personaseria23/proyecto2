let objArray: Array<Usuario> = new Array();
let arrayLargo: number;


interface Usuario{
  password: string;
  nombre: string;
  email: string;
  lvl: boolean;
}
let newUser: Usuario = {
  password : "null",
  nombre : "null",
  email : "null",
  lvl : false
};

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
agregarUsr(admin);

agregarUsr(comUser);

function mostrarCuentas(arrayAccounts: Usuario) {
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

//busca el usuario en el array
function validarUsuario(usr: Usuario) {
  alert(usr.nombre+" validarusr");
  for (let i = 0; i < objArray.length; i++){
    if (objArray[i].email === usr.email) {
      window.alert("¡Ya se encuentra registrado!");
      return true;
    }
  }
  return false ;
}

function agregarUsr(usr: Usuario) {
  if(validarUsuario(usr) === false)
    arrayLargo = objArray.push(usr);
}

function Login(usr:Usuario){
  if(isAdmin(usr)){
    location.href = "index.html";
  }
}

function capturaDatos(nombre: string, email: string, passwd: string) {
  
  
  newUser.nombre = nombre;
  newUser.email = email;
  newUser.password = passwd;
  alert(newUser.nombre);
  validarUsuario(newUser);

  
  

  //mostrarCuentas(objArray);
  
}
