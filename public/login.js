var objArray = new Array();
var arrayLargo;
var newUser = {
    password: "null",
    nombre: "null",
    email: "null",
    lvl: false
};
var admin = {
    password: "admin",
    nombre: "El Admin",
    email: "eladmin@gmail.com",
    lvl: true
};
var comUser = {
    password: "user",
    nombre: "elvio sadi",
    email: "elvistek@gmail.com",
    lvl: false
};
arrayLargo = objArray.push(admin);
arrayLargo = objArray.push(comUser);
function mostrarCuentas(arrayAccounts) {
    for (var i = 0; i < objArray.length; i++)
        console.log(objArray[i]); //por consola
}
function isAdmin(usr) {
    if (usr.lvl)
        return true;
    else
        return false;
}
function validarUsuario(usr) {
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i] === usr) {
            if (isAdmin(usr)) {
                //location.href = "adminview.html";
                return true;
            }
            else {
                //location.href = "index.html";
                return true;
            }
        }
        else {
            //location.href = "inicio.html";
            arrayLargo = objArray.push(usr);
            return false;
        }
        ;
    }
}
/*
function agregarUsr(usr: Usuario) {
  if (!validarUsuario(usr)) {
  arrayLargo = objArray.push(usr);
}
  else window.alert("¡Ya se encuentra registrado!");
}
*/
function Login(usr) {
    if (isAdmin(usr)) {
        location.href = "index.html";
    }
}
function capturaDatos(nombre, email, passwd) {
    alert('holaas');
    alert(nombre + " " + email + " " + passwd);
    newUser.nombre = nombre;
    newUser.email = email;
    newUser.password = passwd;
    alert(newUser.nombre);
    validarUsuario(newUser);
    //mostrarCuentas(objArray);
}
