interface Usuario{
  password: string;
  nombre: string;
  email: string;
  isAdmin: boolean;
}

let admin: Usuario = {
  password: "admin",
  nombre: "El Admin",
  email: "eladmin@gmail.com",
  isAdmin: true
}

let comUser: Usuario = {

  password: "user",
  nombre: "elvio sadi",
  email: "elvistek@gmail.com",
  isAdmin: false
}

let objArray: Array<Usuario> = new Array();
let arrayLargo: number = objArray.push(admin);
agregarUsr(comUser);
agregarUsr(comUser);
agregarUsr(admin);

function mostrarCuentas(arrayAccounts:Usuario) {
  for (let i = 0; i < objArray.length;i++)
    console.log(objArray[i]); //por consola
  console.log(validarUsuario(admin))
  location.href = "adminview.html";
}

function isAdmin(usr: Usuario) {
  if (usr.isAdmin)
    return true;
  else return false;
}

function validarUsuario(usr: Usuario) {
  for (let i = 0; i < objArray.length; i++){
    if (objArray[i] === usr) 
      return true;
    else return false;
  }
}
function agregarUsr(usr: Usuario) {
  if (!validarUsuario(usr))
    arrayLargo = objArray.push(usr);
  else window.alert("¡Ya se encuentra registrado!");
}

function Login(usr:Usuario){
  if(isAdmin(usr)){
    location.href = "index.html";
  }
}


