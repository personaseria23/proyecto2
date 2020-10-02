$(document).ready(function () {
    toggleView();
  
});

function toggleView(){
  var inventario = $('#inventario');
  var ordenes = $('#ordenes');
  $('#btn_inventario').click(function (e) { 
    e.preventDefault();
    inventario.toggle(1000);
    ordenes.toggle(1000);
  });
}

function verOrdenes(){
  var inventario = $('#inventario');
  var ordenes = $('#ordenes');
  $('#btn_ordenes').click(function (e) { 
    e.preventDefault();
    inventario.toggle(1000);
    ordenes.toggle(1000);
  });
}