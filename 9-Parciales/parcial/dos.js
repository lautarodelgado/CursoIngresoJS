function Mostrar()
{
  var importe;
  var iva;
  var importeFinal;



  importe = prompt("Importe:");

  importe = parseInt(importe);
  iva = importe*0.21;

  importeFinal = importe + iva;


  document.getElementById('importeFinal').value = importeFinal;

}
