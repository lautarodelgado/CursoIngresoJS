//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;
	var precioFinal;

	importe = prompt("Importe del producto;");

	importe = parseInt(importe);
	iva = parseInt(iva);

	iva = importe*0.21;
	precioFinal = importe + iva;

	alert(precioFinal)



	
}

