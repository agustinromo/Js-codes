var vb = document.getElementById("villaBonita");
var papel = vb.getContext("2d"); 

var fondo = {
  url: "tile.png", cargaOK: false
};

var vaca = {
  url: "vaca.png", cargaOK: false
};

var cantidad = aleatorio(1, 50);

fondo.imagen = new Image(); //al definir un objeto la primera letra del nombre va con mays
// el new Image es la herramienta de js para realizar el trazo del dibujo
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
   fondo.cargaOK = true;
   dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  //papel.drawImage(fondo, 0, 0); //dibujar la imagen dentro del canvas
  if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0); //dibujar la imagen dentro del canvas
  }
  if(vaca.cargaOK == true)
  {
    console.log(cantidad);
    for(var i=0; i < cantidad; i++){
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y); //dibujar la imagen dentro del canvas
    }
  }
}
//var z,i;
//for(i=0; i<10; i++)
//{
  //z = aleatorio(-5, 5);
  //document.write(z + ", ")
//}
function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1))+min; //formula para numeros aleatorios
  return resultado;
}
