var admin = {
    password: "admin",
    nombre: "El Admin",
    email: "eladmin@gmail.com",
    isAdmin: true
};
var comUser = {
    password: "user",
    nombre: "elvio sadi",
    email: "elvistek@gmail.com",
    isAdmin: false
};
var objArray = new Array();
var arrayLargo = objArray.push(admin);
agregarUsr(comUser);
agregarUsr(comUser);
agregarUsr(admin);
function mostrarCuentas(arrayAccounts) {
    for (var i = 0; i < objArray.length; i++)
        console.log(objArray[i]); //por consola
    console.log(validarUsuario(admin));
    location.href = "adminview.html";
}
function isAdmin(usr) {
    if (usr.isAdmin)
        return true;
    else
        return false;
}
function validarUsuario(usr) {
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i] === usr)
            return true;
        else
            return false;
    }
}
function agregarUsr(usr) {
    if (!validarUsuario(usr))
        arrayLargo = objArray.push(usr);
    else
        window.alert("¡Ya se encuentra registrado!");
}
function Login(usr) {
    if (isAdmin(usr)) {
        location.href = "index.html";
    }
}
