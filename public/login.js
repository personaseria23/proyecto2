var objArray = new Array();
var arrayLargo;
var newUser = {
    password: "null",
    nombre: "null",
    email: "null",
    lvl: false
};
var admin = {
    password: "p",
    nombre: "admin",
    email: "e",
    lvl: true
};
var comUser = {
    password: "p1",
    nombre: "user",
    email: "e1",
    lvl: false
};
agregarUsr(admin);
agregarUsr(comUser);
function mostrarCuentas(arrayAccounts) {
    console.clear();
    for (var i = 0; i < objArray.length; i++) {
        console.log(objArray[i]);
    } //por consola
}
function isAdmin(usr) {
    if (usr.lvl)
        return true;
    else
        return false;
}
//busca el usuario en el array
function validarUsuario(usr) {
    alert(usr.nombre + " validarusr");
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i].email === usr.email) {
            window.alert("¡Ya se encuentra registrado!");
            return true;
        }
    }
    return false;
}
function agregarUsr(usr) {
    if (validarUsuario(usr) === false)
        arrayLargo = objArray.push(usr);
}
function Login(usr) {
    if (isAdmin(usr)) {
        location.href = "index.html";
    }
}
function capturaDatos(nombre, email, passwd) {
    newUser.nombre = nombre;
    newUser.email = email;
    newUser.password = passwd;
    alert(newUser.nombre);
    validarUsuario(newUser);
    //mostrarCuentas(objArray);
}
