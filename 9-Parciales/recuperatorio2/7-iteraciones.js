//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var sumaNotas=0;
	var promedio;
	var minimo;
	var contadorVarones=0;

	while(contador < 6)
	{
		contador++;
		nota = prompt("Ingrese la nota:");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = prompt("Ingrese la nota:");
			nota = parseInt(nota);
		}

		sumaNotas = sumaNotas + nota;

		sexo = prompt("Ingrese f o m:");
		while(sexo !="m" && sexo !="f")
		{
			sexo = prompt("Ingrese f o m:");
		}

		if(contador==1)
		{
			minimo = nota;
		}
		else
		{
			if(nota < minimo)
			minimo = nota;
		}

		if(sexo == "m" && nota > 5)
		{
			contadorVarones++;
		}
	}

	promedio = sumaNotas/contador;

	alert("El promedio de las notas es " + promedio);
	alert("La nota mínima es " + minimo);
	alert("La cantidad de varones con nota mayor o igual a seis es " + contadorVarones);
}

