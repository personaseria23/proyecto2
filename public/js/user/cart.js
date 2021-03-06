let _cart = []

// devolver el carrito del usuario
let getCart = () => {return _cart}

// Llenar el nodo carrito con nodo productos desde el arreglo carrito
let addCartNode = product => $('#cart').append(getCartNode(product))

// remover un elemento del carrito del usuario 
function removeProduct (node,name) {
	$(node).parent().parent().parent().remove()
	for (let i=0; i<_cart.length; i++){
		_cart[i].name.trim().toUpperCase() == name.trim().toUpperCase() && _cart.splice(i, 1)
	}
	
	$('#total').text('Total: $'+ getTotal())
}

// agregar un producto al arreglo carritos
function addProductToCart (id) {
	let currentProduct = getProduct(id)
	// revisa si existe el producto
	for(var i=0; i <_cart.length; i++)
		if(currentProduct.name == _cart[i].name){
			$('.cartNodeCount')[i].value = ++_cart[i].count
			$('#total').text('Total: $'+ getTotal())
			return
		}
	currentProduct.count = 1
	_cart.push(currentProduct)
	addCartNode(currentProduct)
	$('#total').text('Total: $'+ getTotal())
	return
}
// llena con el total de los elementos actual en el carrito
function getTotal(){
	let totalValue = 0
	for(let i=0 ; i<_cart.length;i++){
		let currentProduct = _cart[i]
		totalValue = totalValue + (currentProduct.count * currentProduct.value)
	}
	return totalValue
}

// agrega carro a la lista de ordenes
function processOrder () {
	if( _cart.length < 1 && document.getElementById('attachment').files.length == 0 ){
		$('#cartModal').modal('show')
		return

	}else{
		let reader = new FileReader()
		reader.onload = e => generateOrder(e.target.result)

		if(document.getElementById("color1").checked || document.getElementById("color2").checked || _cart.length > 0){
			if ($('#attachment')[0].files[0]){

				$('#orderModal').modal('show')
				reader.readAsDataURL($('#attachment')[0].files[0])
			}else{

				$('#orderModal').modal('show')
				generateOrder (null)
		
			}
		}else{
			$('#colorModal').modal('show')
			return
		}
	}
}

// genera la orden
function generateOrder (attachmentUrl) {
	let order = [{
		name: userEmail,
		attachment: attachmentUrl,
		comment: $('#comment').val()
	}].concat(_cart)
	// agregar contador de cada producto en el carro
	$('.cartNodeCount').map((index, node) => {
		order[index+1].count = parseInt($(node).val())})
	// limpiar carrito
	_cart = []
	$('#cart').empty()
	$('#attachment').val('')
	$('#comment').val('')
	$('#total').text('Total: $0')
	// agregar la orden
	_orders.push(order)
}

// obtener un nodo carrito para insertarlo en DOM  
function getCartNode (product) {
	return $('<li class="list-group-item"></li>').append(
		$('<div class="row"></div>').append(
			$('<div class="col-xs-2"></div>').append(
				$('<img src="'+product.img+'" class="img-thumbnail"></img>')),
			$('<div class="col-4"></div>').text(product.name),
			$('<div class="col-3"></div>').text('$'+product.value),
			$('<div class="col"></div>').append(
				$(`<input onchange="updateCount()" type="number" min="1" value="${product.count}" class="cartNodeCount"  style="width: 50px;">`)),
			$('<div class="col text-right"></div>').append(
				$('<button class="btn btn-danger" onclick="removeProduct(this,\''+product.name+'\')"></button>').append(
					$('<i class="fas fa-trash-alt"></i>')))))
}

// Actualizar el contador de cada producto por su input en el carro
function updateCount () {
	$('.cartNodeCount').map((index, node) => {
		let inputCount = parseInt($(node).val())
		if (_cart[index].count != inputCount) {
			_cart[index].count = inputCount
			$('#total').text('Total: $'+ getTotal())
		}
	})
}

function isEmpty (){
	if(_cart.length < 1){
		return 0
	}else{
		return 1
	}
}