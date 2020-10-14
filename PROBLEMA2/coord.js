var boton = document.getElementById("boton_calcula");

boton.addEventListener("click", coord_s);
function coord_s(){

	var divhtml = document.getElementById("div_msg");
    var texto1 = document.getElementById("texto_n1");
    var texto2 = document.getElementById("texto_n2");

    x=parseInt(texto1.value);
    y=parseInt(texto2.value);

    boton.addEventListener("click", coord_s);
    
    if(x == 0.0 && y == 0.0){
        div_msg.innerHTML = "SECCIÓN EN EL ORIGEN";
    }
    else if(x > 0.0 && y > 0.0){
        div_msg.innerHTML = "SECCIÓN EN : Q1";
    }
    else if(x > 0.0 && y < 0.0){
        div_msg.innerHTML = "SECCIÓN EN : Q4";
    }
    else if(x < 0.0 && y > 0.0){
        div_msg.innerHTML = "SECCIÓN EN : Q2";
    }
    else{
        div_msg.innerHTML = "SECCIÓN EN : Q3";
    }
}