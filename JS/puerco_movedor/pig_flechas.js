�d� ((=�`oky--64,l!6Ee�odl�2mId(
�k�mj+1Y[j⮂��H���|޲�%(�mN]���)"#d9>0&vEu�orbe#��``��� 9x��6VO/�0�%%ldfd8(r>�`��	U"0r8�x*

3#S�xu|<{��i �`u@qv�hyj&���@'#0na �c-RcI�P�8Tem3�
�fo33�gfb.g��E0mn%dqqvb��r�f~�ul�Ȱt)���CSQ�esam�7vCGrp��WO"%Xdzs��%,W��tQ`�mm�DS�`$p)n:(��Y�$�gya�09�:s�"hu�tw$E%�J/*t`xt(�7<:)��w)p��aexXo[-)u�15i5hj�%7C(�cf�d`)�we�e�d2<)9����s�Zk`�ip�}ɒvai0t3�G# <��H�,%:l�`�hh�?�.:=8�R�"NJ�ep|��}
6��BV�#S!{* �zd<���!�*b��"ba`&�w�t9l�e<:��M���imagen = new Image();
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
    for(var i=0; i<=9; i++){
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.imagen, x, y); //dibujar la imagen dentro del canvas
    }
  }
}

function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1))+min; //formula para numeros aleatorios
  return resultado;
}
