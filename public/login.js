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
arrayLargo = objArray.push(comUser);
arrayLargo = objArray.push(admin);
function mostrarCuentas(arrayAccounts) {
    for (var i = 0; i < objArray.length; i++)
        console.log(objArray[i]); //por consola
    console.log(isAdmin(objArray[2]));
    console.log(true);
}
function isAdmin(usr) {
    if (usr.isAdmin)
        return true;
    else
        return false;
}
