// insertar nodo de inventario para cada producto
function fillInventory() {
	_inventory.forEach((product, index) => 
		$("#inventory").append(getInventoryNode(product, index)))
}

// generar un nodo inventario
function getInventoryNode(product, index) {
  return $('<li class="list-group-item list-group-item-action"></li>').append(
		$('<div class="row"></div>').append(
			$('<div class="col-xs-2"></div>').append(
				$('<img src="'+product.img+'" class="img-thumbnail"></img>')),
			$('<div class="col"></div>').text(product.name),
			$('<div class="col-3 d-md-none d-lg-block"></div>').text('U$D'+product.value),
			$('<div class="col text-center"></div>').append(
				$('<button class="btn btn-primary" data-toggle="collapse" data-target="#collapseInventory'+index+'" aria-expanded="false" aria-controls="collapseInventory'+index+'"></button>').append(
					$('<i class="fas fa-edit"></i>')),
				$('<button class="btn btn-danger" onclick="removeFromInventory(this, '+index+')"></button>').append(
					$('<i class="fas fa-trash-alt"></i>')))),
		$('<div class="collapse" id="collapseInventory'+index+'"></div>').append(getEditForm(product, index)))
}

// generar un formulario de edición para un producto
function getEditForm (product, index) {
	return $('<div class="mt-2 inventoryForm"></div>').append(
		$('<div class="form-group"></div>').append(
			$('<label>Product name</label>'),
			$('<input id="productName'+index+'" type="text" class="form-control" placeholder="'+product.name+'"/>')),
		$('<div class="form-group"></div>').append(
			$('<label>Value</label>'),
			$('<input id="productValue'+index+'" type="number" class="form-control" placeholder="U$D'+product.value+'"/>')),
		$('<div class="form-group"></div>').append(
			$('<label>Image url</label>'),
			$('<input id="productImg'+index+'" type="text" class="form-control" placeholder="'+product.img+'"/>')),
		$('<div class="form-group"></div>').append(
			$('<label>Stock</label>'),
			$('<input id="productStock'+index+'" type="number" class="form-control" value="'+product.stock+'"/>')),
		$('<button class="btn btn-primary btn-block" onclick="setProduct('+index+')"></button>').append(
			$('<i class="fas fa-save"></i>')))
}

// actualizar la informacion de producto desde el formulario de edición
function setProduct (id) {
	if (id === undefined) {
		id = _inventory.length
		_inventory.push({})
		$('#productName').val()  && (_inventory[id].name  = $('#productName').val())
		$('#productValue').val() && (_inventory[id].value = parseInt($('#productValue').val()))
		$('#productImg').val()   && (_inventory[id].img   = $('#productImg').val())
		$('#productStock').val() && (_inventory[id].stock = parseInt($('#productStock').val()))
	} else {
		$('#productName'+id).val()  && (_inventory[id].name  = $('#productName'+id).val())
		$('#productValue'+id).val() && (_inventory[id].value = parseInt($('#productValue'+id).val()))
		$('#productImg'+id).val()   && (_inventory[id].img   = $('#productImg'+id).val())
		$('#productStock'+id).val() && (_inventory[id].stock = parseInt($('#productStock'+id).val()))
	}
	$('#productName').val('')
	$('#productValue').val('')
	$('#productImg').val('')
	$('#productStock').val('')
	reloadInventory()
}

// importar productos desde el archivo csv
function importFromCsv() {
	$("#attachment").click()
    $("#attachment").one('change', () =>
		$("#attachment").parse({
			config: {
				complete: result => {
					_inventory = _inventory.concat(result.data)
					reloadInventory()
					$("#attachment").one('change', null)
				},
				dynamicTyping: true,
				header: true
			},
			complete: () => $("#attachment").val('')
		}))
}

// remover un producto del inventario
function removeFromInventory (node, id) {
	_inventory.splice(id, 1)
	reloadInventory()
}

// recargar nodo inventario 
let reloadInventory = () => $("#inventory").empty() && fillInventory()

// obtener todos los productos
let getProducts = () => {return _inventory}

// obtener producto por id
let getProduct = id => {return _inventory[id]}

// lista de productos en la store
let _inventory = [{
  'name': 'Jordan Retro 1 High x Travis Scott',
  'img': 'https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/qhkqa20avfhumxwky4rq/air-jordan-1-high-travis-scott-release-date.jpg',
  'value': 1719,
  'stock': 2,
},{ 
  'name': 'Jordan 1 Mid Black Hot Punch',
  'img': 'https://stockx.imgix.net/Air-Jordan-1-Mid-Black-Hot-Punch-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1555964916&w=1000',
  'value': 450,
  'stock': 10,
},{
  'name': 'Yeezy boost 350 v2 Zebra',
  'img': 'https://s3.amazonaws.com/charitycdn/cache/resizedcrop-063849ed9fb46695b3d9a00c469467d4-800x800.jpg',
  'value': 328,
  'stock': 10,
},{
  'name': 'Nike Air Force 1',
  'img': 'https://http2.mlstatic.com/zapatilla-nike-air-force-1-mujer-pinkorangeblack-D_NQ_NP_855792-MLC43219171479_082020-F.webp',
  'value': 386,
  'stock': 1,
},{
  'name': 'Nike Dunk High Michigan',
  'img': 'https://cdn.fs.grailed.com/api/file/sskpA8NzRaiv3k4remk2',
  'value': 233,
  'stock': 10,
},{	
  'name': 'Nike Elastico GT Futbol Sala',
  'img': 'https://www.futbolemotion.com/imagesarticulos/95375/grandes/zapatilla-nike-nike5-elastico-celeste-blanca-fucsia-1.jpg',
  'value': 399,
  'stock': 10,
},{
  'name': 'Jordan 1 Retro High Off-White Chicago',
  'img': 'https://e3a2x2w3.stackpathcdn.com/wp-content/uploads/2020/03/aa3834_101-2.jpg',
  'value': 3864,
  'stock': 1,
},{
  'name': 'Jordan 1 Mid Digital Pink',
  'img': 'https://cdn.discordapp.com/attachments/751572415720587384/759899324623749130/87964135_2563496680531141_7322396013879099392_n.png',
  'value': 450,
  'stock': 10,
}]