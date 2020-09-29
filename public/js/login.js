// arreglo cuentas
let _accounts = [
	{ user: "admin", pass: "", level: 1 },
	{ user: "user", pass: "", level: 2 },
] 

// correo electrónico del usuario registrado actual
let userEmail = ""

// limpiar todos los nodos insertados por otras funciones
function clearAll () {
	_cart = []
	$('#cart').empty()
	$('#products').empty()
	$("#orders").empty()
	$("#inventory").empty()
	$('#inputUser').val("")
	$('#inputPassword').val("")
}

// ir a una vista especifica (login, user, admin)
function goTo (name) {
	hideAllViews()
	// revelar solo la vista seleccionada
	$('#'+name).css('display', 'block')
}

// esconder todas las vistas
function hideAllViews () {
	// estilos de login
	$('body').css('display', 'block')
	$('body').css('align-items', 'left')
	// esconder todas las vistas
	$('#login').css('display', 'none')
	$('#admin').css('display', 'none')
	$('#user').css('display', 'none')
	$('#register').css('display', 'none')
}

// evaluar login para redireccionar
function evaluateLogin () {
	userEmail = $('#inputUser').val()
	// chequear credenciales login 
	let level = checkPassword(userEmail, $('#inputPassword').val())
	if (level < 1) {
		$('#accountModal').modal('show')
		return
	}
	// redirigir a la vista correcta al iniciar sesión correctamente
	clearAll()
	switch (level) {
		case 1:
			fillOrders()
			fillInventory()
			goTo('admin')
			break
		case 2:
			fillProductGallery()
			goTo('user')
			break
	}
}

// comprobar la contraseña y devolver al nivel de acceso de la cuenta
function checkPassword (user, pass) {
	for (i=0; i<_accounts.length; i++)
		if (_accounts[i].user === user)
			if (_accounts[i].pass == pass)
				return _accounts[i].level
			else
				break
	return 0
}	

// registrar una cuenta
function register () {
	// chequear si el usuario existe
	goTo('register')
	let user = $('#inputUser').val()
	if (user == "") {
		$('#userExistModal').modal('show')
		return
	}
	for (i=0; i<_accounts.length; i++) 
		if (_accounts[i].user ===  user) {
			$('#userExistModal').modal('show')
			return
		}
	// registrar cuenta
	_accounts.push({
		user: user,
		pass: $('#inputPassword').val(),
		level: 2
	})
	clearAll()
	$('#registerModal').modal('show')
	
}