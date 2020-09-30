let _cart = []

// return current user cart
let getCart = () => {return _cart}

// Fill cart node with product nodes from cart array
let addCartNode = product => $('#cart').append(getCartNode(product))

// remove an element from user cart
function removeProduct (node,name) {
	$(node).parent().parent().parent().remove()
	for (let i=0; i<_cart.length; i++){
		_cart[i].name.trim().toUpperCase() == name.trim().toUpperCase() && _cart.splice(i, 1)
	}
	
	$('#total').text('Total: $'+ getTotal())
}

// add product to cart array
function addProductToCart (id) {
	let currentProduct = getProduct(id)
	// check if product exist
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
//fill with the total of the current elements in it
function getTotal(){
	let totalValue = 0
	for(let i=0 ; i<_cart.length;i++){
		let currentProduct = _cart[i]
		totalValue = totalValue + (currentProduct.count * currentProduct.value)
	}
	return totalValue
}

// add cart to orders list
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

// generate the order
function generateOrder (attachmentUrl) {
	let order = [{
		name: userEmail,
		attachment: attachmentUrl,
		comment: $('#comment').val()
	}].concat(_cart)
	// add count for every product in the cart
	$('.cartNodeCount').map((index, node) => {
		order[index+1].count = parseInt($(node).val())})
	// clear cart
	_cart = []
	$('#cart').empty()
	$('#attachment').val('')
	$('#comment').val('')
	$('#total').text('Total: $0')
	// add the order
	_orders.push(order)
}

// get a cart node for insert in DOM
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

// Update count of every product by his input in the cart
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