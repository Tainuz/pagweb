var boton = document.getElementById("boton_calcula");

boton.addEventListener("click", esfera_vol);
function esfera_vol(){

	var divhtml = document.getElementById("div_msg");
	var texto1 = document.getElementById("texto_n1");

	n1=parseInt(texto1.value);

	boton.addEventListener("click", esfera_vol);
	
	var volumen = (4/3.0) * 3.14159 * (n1*n1*n1);
	
	div_msg.innerHTML = "VOLUMEN = " + volumen;
}