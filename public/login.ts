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

var arrayAccounts [] = [admin, comUser];

function mostrarCuentas(arrayAccounts:any) {
  
}