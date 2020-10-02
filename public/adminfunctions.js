$(document).ready(function () {
    toggleView();
  
});

function toggleView(){
  var inventario = $('#inventario');
  var ordenes = $('#ordenes');
  $('#btn_inventario').click(function (e) { 
    e.preventDefault();
    inventario.toggle(500);
    ordenes.toggle(500);
  });
}

function verOrdenes(){
  var inventario = $('#inventario');
  var ordenes = $('#ordenes');
  $('#btn_ordenes').click(function (e) { 
    e.preventDefault();
    inventario.toggle(500);
    ordenes.toggle(500);
  });
}