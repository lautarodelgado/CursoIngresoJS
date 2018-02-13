//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var alambreTotal;

	ancho = document.getElementById('ancho').value;
	largo = document.getElementById('largo').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = ancho*2 + largo*2;
	alambreTotal = perimetro*6;

	alert(alambreTotal);
	
}

