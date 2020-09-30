
//instancias globales
let objArray: Array<Usuario> = new Array();  //Tipo Usuario
let arrayLargo: number;

// interface Usuario
interface Usuario{
  password: string;
  nombre: string;
  email: string;
  lvl: boolean;
}

//Usuario admin
let admin: Usuario = {
  password: "w",
  nombre: "admin",
  email: "q",
  lvl: true
}
// Usuario "common user"
let comUser: Usuario = {
  password: "s",
  nombre: "user",
  email: "a",
  lvl: false
}

//inserta cuentas iniciales
arrayLargo = objArray.push(admin);
arrayLargo = objArray.push(comUser);

// muestra los obj de objArray[] por consola
function mostrarCuentas() {
  console.clear();  
  for (let i = 0; i < objArray.length; i++) {
    console.log(objArray[i]);
  } //por consola
}

// Consulta si el usuario es un Admin. Retorna boolean
function isAdmin(usr: Usuario) {
  if (usr.lvl)
    return true;
  else return false;
}

//  ------------------
function Login(usr:Usuario){
  if(isAdmin(usr)){
    //location.href = "index.html";
    goto('index');
  }
}

// Recibe parametros desde inputs en registro.html. Comprueba si el usuario, si no existe se inserta. RedirTo inicio.html
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
  //location.href = "inicio.html";
}
function goto(view: string) {
  location.href = view + ".html";
}
//ve si existe 'user' en objArray[]. si no existe lo inserta
function validarUser(user: Usuario) {
  for (let i = 0; i < objArray.length; i++){
    console.log(objArray[i]);
    if (objArray[i].nombre === user.nombre && objArray[i].email === user.email)
      break;
  }
  arrayLargo = objArray.push(user);
}
//Valida el login de un usuario. lo busca en objArray[], si lo encuentra comprueba si es Admin y redirecciona a la vista
//Si no se encuentra el usuario Refresca la página mandando un aviso de inexistencia.
function validarLogin(email: string, passwd: string) {
  for (let i = 0; i < objArray.length; i++){
    if (objArray[i].email === email && objArray[i].password === passwd) {
      if (isAdmin(buscarUser(email,passwd))) {
        goto('adminview');
        return;
      } else {
        goto('tienda');
        return;
      }
    }
  }
  
  alert('El usuario no existe!');
  goto('inicio');
}

//Busca un usuario en ObjArray. Retorna el Obj o un Obj inicializado en null.
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