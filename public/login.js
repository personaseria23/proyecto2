//instancias globales
var objArray = new Array(); //Tipo Usuario
var arrayLargo;
//Usuario admin
var admin = {
    password: "p",
    nombre: "admin",
    email: "e",
    lvl: true
};
// Usuario "common user"
var comUser = {
    password: "p1",
    nombre: "user",
    email: "e1",
    lvl: false
};
//inserta cuentas iniciales
arrayLargo = objArray.push(admin);
arrayLargo = objArray.push(comUser);
// muestra los obj de objArray[] por consola
function mostrarCuentas() {
    console.clear();
    for (var i = 0; i < objArray.length; i++) {
        console.log(objArray[i]);
    } //por consola
}
// Consulta si el usuario es un Admin. Retorna boolean
function isAdmin(usr) {
    if (usr.lvl)
        return true;
    else
        return false;
}
//  ------------------
function Login(usr) {
    if (isAdmin(usr)) {
        //location.href = "index.html";
        goto('index');
    }
}
// Recibe parametros desde inputs en registro.html. Comprueba si el usuario, si no existe se inserta. RedirTo inicio.html
function capturaDatos(nombre, email, passwd) {
    var newUser = {
        password: "null",
        nombre: "null",
        email: "null",
        lvl: false
    };
    newUser.email = email;
    newUser.nombre = nombre;
    newUser.password = passwd;
    console.log(newUser);
    console.clear();
    for (var i = 0; i < objArray.length; i++) {
        console.log(objArray[i]);
        if (objArray[i].email === newUser.email || objArray[i].nombre === newUser.nombre) {
            alert("El user EXISTE");
            return;
        }
    }
    console.log(newUser);
    objArray.push(newUser);
    alert("Registro exitoso!");
    //location.href = "inicio.html";
}
function goto(view) {
    location.href = view + ".html";
}
//ve si existe 'user' en objArray[]. si no existe lo inserta
function validarUser(user) {
    for (var i = 0; i < objArray.length; i++) {
        console.log(objArray[i]);
        if (objArray[i].nombre === user.nombre && objArray[i].email === user.email)
            break;
    }
    arrayLargo = objArray.push(user);
}
//Valida el login de un usuario. lo busca en objArray[], si lo encuentra comprueba si es Admin y redirecciona a la vista
//Si no se encuentra el usuario Refresca la página mandando un aviso de inexistencia.
function validarLogin(email, passwd) {
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i].email === email && objArray[i].password === passwd) {
            if (isAdmin(buscarUser(email, passwd))) {
                //location.href = "adminview.html";
                goto('adminview');
            }
            else {
                goto('index');
                //location.href = "index.html";
            }
        }
        else {
            alert("Usuario no existe!");
            //location.href = "inicio.html";
            goto('inicio');
        }
    }
}
//Busca un usuario en ObjArray. Retorna el Obj o un Obj inicializado en null.
function buscarUser(email, passwd) {
    var u = {
        password: "null",
        nombre: "null",
        email: "null",
        lvl: false
    };
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i].email === email && objArray[i].password === passwd) {
            return objArray[i];
        }
    }
    return u;
}
