var admin = {
    user: "admin",
    password: "admin",
    nombres: "El Admin",
    apellidos: "Selac Ome",
    email: "eladmin@gmail.com",
    direccion: "calle falsa 123",
    isAdmin: true
};
var comUser = {
    user: "user1",
    password: "user",
    nombres: "elvio sadi",
    apellidos: "cabezas negras",
    email: "elvistek@gmail.com",
    direccion: "calle chueca 123",
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
    arrayLargo = objArray.push(usr);
}
