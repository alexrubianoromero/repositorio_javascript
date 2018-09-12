

 
   var escuchaon = document.getElementById('on');
//this.escuchaon.addEventListener(..........................
    this.escuchaon.addEventListener('click',function () {
    limpiar(); 
     });

document.getElementById('on').addEventListener('click',function () {
    limpiar(); 
});
document.getElementById('punto').addEventListener('click',function () {
    colocar_punto(); 
});
document.getElementById('sign').addEventListener('click',function () {
    colocar_signo(); 
});
document.getElementById('mas').addEventListener('click',function () {
    primer_numero_y_signo("mas"); 
});
document.getElementById('menos').addEventListener('click',function () {
    primer_numero_y_signo("menos"); 
});
document.getElementById('por').addEventListener('click',function () {
    primer_numero_y_signo("por"); 
});
document.getElementById('dividido').addEventListener('click',function () {
    primer_numero_y_signo("dividido"); 
});
document.getElementById('igual').addEventListener('click',function () {
    operaciones(signo); 
});
document.getElementById('1').addEventListener('click',function () {
teclas(1)
});
document.getElementById('2').addEventListener('click',function () {
teclas(2)
});
document.getElementById('3').addEventListener('click',function () {
teclas(3)
});
document.getElementById('4').addEventListener('click',function () {
teclas(4)
});
document.getElementById('5').addEventListener('click',function () {
teclas(5)
});
document.getElementById('6').addEventListener('click',function () {
teclas(6)
});
document.getElementById('7').addEventListener('click',function () {
teclas(7)
});
document.getElementById('8').addEventListener('click',function () {
teclas(8)
});
document.getElementById('9').addEventListener('click',function () {
teclas(9)
});
document.getElementById('0').addEventListener('click',function () {
teclas(0)
});

////////////////variables globales
var num1=0;
var num2=0;
var signo= "";
var resultado=0;
///////////////////////////////funcion de primer_numero_y_signo
function primer_numero_y_signo(id_signo){
	 num1= display.innerHTML;
	 signo = id_signo;
	 display.innerHTML = "";
 

}//fin funcion primer_numero_y_signo


///////////////////////////funciones de las operaciones 

function operaciones(operacion){
	num2 = display.innerHTML;
switch (operacion) {
  case "mas":
	    //alert("suma de num1=" + num1 + " operacion "+signo + "num2="+ num2);
	   resultado = parseInt(num1) + parseInt(num2);
	   //display.innerHTML = resultado;
	   verificar_longitud(resultado);
    break;

  case "menos":
	    resultado = parseInt(num1) - parseInt(num2);
	   //display.innerHTML = resultado;
	   verificar_longitud(resultado);
    break;
  case "por":
    	resultado = parseInt(num1) * parseInt(num2);
   		//display.innerHTML = resultado;
   		verificar_longitud(resultado);
    break;
  case "dividido":
    	resultado = parseInt(num1) / parseInt(num2);
   		verificar_longitud(resultado);
    break;
 
  default:
    //alert("esto es por defecto ");
    }// fin de switch

    //alert("esto se imprime fuera edl switch");

}//fin de la funcion operaciones 
////////////////////////////////////////////////////////

////////////funcion de verificar longitud de resultado 
function verificar_longitud(resulta){
	 //alert('resulta '+ resulta);
	 var numero = resulta.toString(); 
        var n = numero.length;
        //alert('longitud ='+ n);
        if (n >= 8)
        {
        	 var subcadena =  numero.substring(0,8);
             display.innerHTML = subcadena;
        }
        else 
        {
        	 display.innerHTML = numero;
        }
}



function limpiar(){	
	display.innerHTML = '0';
}


////////////colocar el punto 
function colocar_punto(){

	var str = display.innerHTML;
    var n = str.indexOf(".");
    if(n == -1)
    {
    	display.innerHTML += ".";
    }    
}
/////////colocar signo 
function colocar_signo(){ 
	var valor = display.innerHTML;
	if(valor!=0)
		var n = valor.indexOf("-");
		if(n== -1)
		{
			display.innerHTML = '-'+ valor;
		}
		else
		{
			var no_signo= valor.replace('-','');
			display.innerHTML = no_signo;
		}//fin de else 
}//fin de funcion colocar_signo 


//////para que muestre el valor del numero 
function teclas(numero){
    if (display.innerHTML == '0')
    {  display.innerHTML = numero; }
    else
    {
        var numero_pantalla = display.innerHTML += numero; 
        var n = numero_pantalla.length;
        if (n >= 8)
        {
           
           var subcadena =  numero_pantalla.substring(0,8);
           display.innerHTML = subcadena;
        }   
        else
        { 
    	  display.innerHTML = numero_pantalla;
        }//fin de else de si no es mayor que 8

    }//fin de else de si no es cero	   
}


/////////////////////funcion egecto en los botones 
 