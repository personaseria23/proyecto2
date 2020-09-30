var objArray = new Array();
var arrayLargo;
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
arrayLargo = objArray.push(admin);
arrayLargo = objArray.push(comUser);
/*
agregarUsr(admin);

agregarUsr(comUser);
*/
function mostrarCuentas() {
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
function Login(usr) {
    if (isAdmin(usr)) {
        location.href = "index.html";
    }
}
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
    location.href = "inicio.html";
}
function validarUser(user) {
    for (var i = 0; i < objArray.length; i++) {
        console.log(objArray[i]);
        if (objArray[i].nombre === user.nombre && objArray[i].email === user.email) {
            break;
        }
    }
    arrayLargo = objArray.push(user);
}
function validarLogin(email, passwd) {
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i].email === email && objArray[i].password === passwd) {
            if (isAdmin(buscarUser(email, passwd))) {
                location.href = "adminview.html";
            }
            else {
                location.href = "index.html";
            }
        }
    }
}
/*
function buscarUser(email: string, passwd: string) {
  
  for (let i = 0; i < objArray.length; i++) {
    if (objArray[i].email === email && objArray[i].password === passwd) {
      return objArray[i];
    }
  }
  
  return ;
}*/
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
