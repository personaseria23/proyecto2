interface Usuario{
  user: string;
  password: string;
  nombres: string;
  apellidos: string;
  email: string;
  direccion: string;
  isAdmin: boolean;
}

let admin: Usuario = {
  user: "admin",
  password: "admin",
  nombres: "El Admin",
  apellidos: "Selac Ome",
  email: "eladmin@gmail.com",
  direccion: "calle falsa 123",
  isAdmin: true
}

let comUser: Usuario = {
  user: "user1",
  password: "user",
  nombres: "elvio sadi",
  apellidos: "cabezas negras",
  email: "elvistek@gmail.com",
  direccion: "calle chueca 123",
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
  arrayLargo = objArray.push(usr);
}