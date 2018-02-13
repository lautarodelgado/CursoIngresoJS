function Mostrar()
{
	var importe;
	var descuento;
	var importeFinal;


	importe = prompt("Ingrese el importe");

	descuento = importe*0.25;

	importeFinal = importe - descuento;

	document.getElementById('importeFinal').value = importeFinal
  	
}
