class Pakiman //con esto ya creaste la def de un objeto
{
  constructor(n, v, a)//las clases tienen constructores
  {
    this.imagen = new Image();//los this se refieren a la instancia de la clase
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.tipo = "tierra"; //el this es una referencia a la var cauchin

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);//forma rapida de insertar imagenes
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />" );
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}
