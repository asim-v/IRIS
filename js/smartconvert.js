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
        chasis.display = 'none';
        chasis.fillOpacity = '0';
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
		ConnectChasis('#743dff','<div class="subtitle-b"><b>Chasis Hydro.</b></div>No es solo un marco, es una pieza de arte + tecnología que te llevará a otro nivel.');
		ConnectJog('#743dff','<div class="subtitle-b"><b>Manubrio con control inteligente.</b></div>No es solamente un manillar, sino que gracias al reconocimiento de imágenes incorporado, es la conexión perfecta entre el camino y tu próxima aventura');
		ConnectHandles('#743dff','<div class="subtitle-b"><b>Bases de fibra de carbono.</b></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas ultricies mi eget. Pharetra magna ac placerat vestibulum lectus.');
		ConnectSeat('#743dff','<div class="subtitle-b"><b>Asiento dinámico.</b></div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
		ConnectInWheel('#743dff','<div class="subtitle-b"><b>Sistema de ruedas inteligente sin radios.</b></div>Potenti neque laoreet sapien malesuada suspendisse elementum nec quam, interdum phasellus penatibus ac tellus varius condimentum turpis, rutrum ultrices habitant lectus eget tincidunt augue.');
		ConnectOutWheel('#743dff','<div class="subtitle-b"><b>Ruedas dinámicas auto ajustadas a la velocidad.</b></div>Per dignissim luctus nascetur semper rhoncus lobortis ut congue consequat, taciti posuere habitasse quis vulputate commodo ad ridiculus, convallis quisque parturient facilisis massa etiam fames laoreet.');
	});
};	