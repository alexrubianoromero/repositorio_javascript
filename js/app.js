
var calculadora =
{ //inicio de objeto calculadora 

///////////////////////////////
limpiar: function(){  
    display.innerHTML = '0';
},
////////////colocar el punto 
colocar_punto: function(){

    var str = display.innerHTML;
    var n = str.indexOf(".");
    if(n == -1)
    {
        display.innerHTML += ".";
    }    
},
/////////colocar signo 
colocar_signo: function(){ 
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
},//fin de funcion colocar_signo 
///////////////////////////////funcion de primer_numero_y_signo
primer_numero_y_signo: function(id_signo){
     num1= display.innerHTML;
     signo = id_signo;
     display.innerHTML = "";
 

},//fin funcion primer_numero_y_signo

operaciones: function(operacion){
    num2 = display.innerHTML;
switch (operacion) {
  case "mas":
        //alert("suma de num1=" + num1 + " operacion "+signo + "num2="+ num2);
       resultado = parseInt(num1) + parseInt(num2);
       //display.innerHTML = resultado;
       this.verificar_longitud(resultado);
    break;

  case "menos":
        resultado = parseInt(num1) - parseInt(num2);
       //display.innerHTML = resultado;
       this.verificar_longitud(resultado);
    break;
  case "por":
        resultado = parseInt(num1) * parseInt(num2);
        //display.innerHTML = resultado;
        this.verificar_longitud(resultado);
    break;
  case "dividido":
        resultado = parseInt(num1) / parseInt(num2);
        this.verificar_longitud(resultado);
    break;
 
  default:
    //alert("esto es por defecto ");
    }// fin de switch

    //alert("esto se imprime fuera edl switch");

},//fin de la funcion operaciones 
////////////funcion de verificar longitud de resultado 
verificar_longitud: function(resulta){
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
}, // fin de verificar longitud 

//////para que muestre el valor del numero 
teclas: function(numero){
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
},

//////////////////////////////////////
StylesButton: function(id) {
        var doc = document.getElementById(id);
        doc.addEventListener('mousedown', function () {
        doc.setAttribute("style", "transform:scale(0.95,0.95)");
        })
        doc.addEventListener('mouseup', function () {
        doc.setAttribute("style", "transform:scale(1,1)");
        })
}//fin de funcion StylesButton


}// fin del objeto calculadora 
//////////////////////////////////////////////////


////////////////variables globales
var num1=0;
var num2=0;
var signo= "";
var resultado=0;


calculadora.StylesButton("on");

document.getElementById('on').addEventListener('click',function () {
    calculadora.limpiar(); 
});
document.getElementById('punto').addEventListener('click',function () {
    calculadora.colocar_punto(); 
});
document.getElementById('sign').addEventListener('click',function () {
    calculadora.colocar_signo(); 
});
document.getElementById('mas').addEventListener('click',function () {
   calculadora.primer_numero_y_signo("mas"); 
});
document.getElementById('menos').addEventListener('click',function () {
    calculadora.primer_numero_y_signo("menos"); 
});
document.getElementById('por').addEventListener('click',function () {
    calculadora.primer_numero_y_signo("por"); 
});
document.getElementById('dividido').addEventListener('click',function () {
    calculadora.primer_numero_y_signo("dividido"); 
});
document.getElementById('igual').addEventListener('click',function () {
    calculadora.operaciones(signo); 
});
document.getElementById('1').addEventListener('click',function () {
calculadora.teclas(1)
});
document.getElementById('2').addEventListener('click',function () {
calculadora.teclas(2)
});
document.getElementById('3').addEventListener('click',function () {
calculadora.teclas(3)
});
document.getElementById('4').addEventListener('click',function () {
calculadora.teclas(4)
});
document.getElementById('5').addEventListener('click',function () {
calculadora.teclas(5)
});
document.getElementById('6').addEventListener('click',function () {
calculadora.teclas(6)
});
document.getElementById('7').addEventListener('click',function () {
calculadora.teclas(7)
});
document.getElementById('8').addEventListener('click',function () {
calculadora.teclas(8)
});
document.getElementById('9').addEventListener('click',function () {
calculadora.teclas(9)
});
document.getElementById('0').addEventListener('click',function () {
calculadora.teclas(0)
});

calculadora.StylesButton("punto");
calculadora.StylesButton("sign");
calculadora.StylesButton("raiz");
calculadora.StylesButton("mas");
calculadora.StylesButton("menos");
calculadora.StylesButton("por");
calculadora.StylesButton("dividido");
calculadora.StylesButton("igual");
calculadora.StylesButton(1);
calculadora.StylesButton(2);
calculadora.StylesButton(3);
calculadora.StylesButton(4);
calculadora.StylesButton(5);
calculadora.StylesButton(6);
calculadora.StylesButton(7);
calculadora.StylesButton(8);
calculadora.StylesButton(9);
calculadora.StylesButton(0);



