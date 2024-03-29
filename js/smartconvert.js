output = document.getElementById('databox');


function isHover(e) {
  return (e.parentElement.querySelector(':hover') === e);
}

function ConnectChasis(color,text){
	var chasis = document.getElementById('chasis');
	var chasis2 = document.getElementById('chasis2');	
	if(isHover(chasis2)){
		chasis.style.fill = color;
		chasis2.style.fill = color;
		output.innerHTML = text;
	}else if(isHover(chasis)){
		chasis2.style.fill = color;
		chasis.style.fill = color;
		output.innerHTML = text;
	}else{
		chasis.style.fill = '#a8a9a8';
		chasis2.style.fill = '#949594';
	}
}

function ConnectHandles(color,text) {
	var handl1 = document.getElementById('hand5');
	var handl2 = document.getElementById('handl22');	
	if(isHover(handl1)){
		handl1.style.fill = color;
		handl2.style.fill = color;
		output.innerHTML = text;
	}else if(isHover(handl2)){
		handl2.style.fill = color;
		handl1.style.fill = color;
		output.innerHTML = text;
	}else{
		handl1.style.fill = '#252524';
		handl2.style.fill = '#252524';
	}
}

function ConnectSeat(color,text){
	var seat = document.getElementById('seat');
	if(isHover(seat)){
		seat.style.fill = color;
		seat.setAttribute("height", "500");
		output.innerHTML = text;
	}else{
		seat.style.fill = '#252524'
	}

}

function ConnectInWheel(color,text){
	var w = document.getElementById('inwheel');
	if(isHover(w)){
		w.style.fill = color;
		output.innerHTML = text;
	}else{
		w.style.fill = '#9dac6c'
	}

}
function ConnectOutWheel(color,text){
	var m = document.getElementById('outwheel');
	if(isHover(m)){
		m.style.fill = color;
		output.innerHTML = text;
	}else{
		m.style.fill = '#252524'
	}

}


function ConnectJog(color,text){
	var jog0 = document.getElementById('jog0');
	var jog1 = document.getElementById('jog1');
	var jog2 = document.getElementById('jog2');
	var jog3 = document.getElementById('jog3');
	if(isHover(jog0)){
		jog0.style.fill = color;
		jog1.style.fill = color;
		jog2.style.fill = color;
		jog3.style.fill = color;
		output.innerHTML = text;
	}else if(isHover(jog1)){
		jog0.style.fill = color;
		jog1.style.fill = color;
		jog2.style.fill = color;
		jog3.style.fill = color;
		output.innerHTML = text;
	}else if(isHover(jog2)){
		jog0.style.fill = color;
		jog1.style.fill = color;
		jog2.style.fill = color;
		jog3.style.fill = color;
		output.innerHTML = text;
	}else if(isHover(jog3)){
		jog0.style.fill = color;
		jog1.style.fill = color;
		jog2.style.fill = color;
		jog3.style.fill = color;
		output.innerHTML = text;
	}else{
		jog0.style.fill = '#949594';
		jog1.style.fill = '#9dac6c';
		jog2.style.fill = '#575955';
		jog3.style.fill = '#252524';
	}	
}

window.onload = function () {
	document.addEventListener('mousemove', function checkHover() {
		ConnectChasis('#abff36','<div class="subtitle-b"><b>Chasis Hydro.</b></div>No es solo un marco, es una pieza de arte + tecnología que te llevará a otro nivel.');
		ConnectJog('#abff36','<div class="subtitle-b"><b>Manubrio con control inteligente.</b></div>No es solamente un manillar, sino que gracias al reconocimiento de imágenes incorporado, es la conexión perfecta entre el camino y tu próxima aventura');
		ConnectHandles('#abff36','<div class="subtitle-b"><b>Bases de fibra de carbono.</b></div>Los soportes de amortiguadores basados en fibra de carbono, mantienen estabilidad y seguridad en todo momento.');
		ConnectSeat('#abff36','<div class="subtitle-b"><b>Asiento ajustable remplazable.</b></div>Simplemente la comodidad necesaria para tus km de viaje.');
		ConnectInWheel('#abff36','<div class="subtitle-b"><b>Sistema de ruedas inteligente sin radios.</b></div>Sin rines! No es un error, el diseño con arquitectura de fibra de carbono, y la estructura inteligente con amortiguadores integrados, soporta hasta 180kg');
		ConnectOutWheel('#abff36','<div class="subtitle-b"><b>Ruedas dinámicas auto ajustadas a la velocidad.</b></div>Llantas con sistema inteligente de soporte, nunca más te sorprenderá tener la llanta ponchada...');
	});
};	