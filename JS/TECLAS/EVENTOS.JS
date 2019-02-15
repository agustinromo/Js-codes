var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
//console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

drawLine("red", x-1, y-1, x+1, y+1, papel);

function drawLine(color, xinicial, yinicial, xfinal, yfinal, lienzo)// Declaracion de la funcion
{
 ////comandos de js para realizar dibujos
 lienzo.beginPath();//iniciar trazos
 lienzo.strokeStyle = color;
 lienzo.lineWidth = 3;
 lienzo.moveTo(xinicial, yinicial);//coordenadas iniciales
 lienzo.lineTo(xfinal, yfinal); //coordenadas finales
 lienzo.stroke();//mostrar trazos
 lienzo.closePath();//terminar trazos
}

function dibujarTeclado(evento)
{
  //if(evento.keyCode == teclas.UP)
//  {
  //  console.log();("arriba amigo"); //console.log(evento.keyCode);
 //}
 var colorcito = "blue";
 var movimiento = 10;
 switch(evento.keyCode)
 {
   case teclas.UP:
    drawLine(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
   //console.log("arriba");
   break;
   case teclas.DOWN:
   drawLine(colorcito, x, y, x, y + movimiento, papel);
   y = y + movimiento;
     //console.log("abajo");
   break;
   case teclas.LEFT:
   drawLine(colorcito, x, y, x, y - movimiento, y, papel);
   x = x - movimiento;
   //console.log("izquierda");
   break;
   case teclas.RIGHT:
   drawLine(colorcito, x, y, x, y + movimiento, y, papel);
   x = x + movimiento;
   //console.log("derecha");
   break;
   default: console.log("tecla no soportada");
   break;
 }
}
