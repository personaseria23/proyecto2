var btnAbrirPopup = document.getElementById('lnkLogin'),
	overlap = document.getElementById('overlap'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlap.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlap.classList.remove('active');
	popup.classList.remove('active');
});