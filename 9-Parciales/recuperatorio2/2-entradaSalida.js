//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;
	var importeFinal;

	importe = prompt("ingrese el importe:");

	importe = parseInt(importe);
	iva = parseInt(iva);

	iva = importe*0.21;
	importeFinal = importe + iva;

	alert(importeFinal);

	

			
	
}

