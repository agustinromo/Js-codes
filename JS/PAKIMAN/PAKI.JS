var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
//instancias diferentes que son agregadas a una coleccion
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
console.log(coleccion);

for(var animales of coleccion)
{
  animales.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
