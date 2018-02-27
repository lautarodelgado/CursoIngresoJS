//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambreTotal;


	ancho = document.getElementById('ancho').value;
	ancho = parseInt(ancho);
	largo = document.getElementById('largo').value;
	largo = parseInt(largo);

	perimetro = largo*2 + ancho*2;

	alambreTotal = perimetro * 6;

	alert("Los metros de alambre necesarios son " + alambreTotal);




	
}

