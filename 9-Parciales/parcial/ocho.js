// hacer un ingreso de alumno, no sabemos cuantos alumnos hay, pedimos el nombre. Hay que mostrar cuàntos alumnos ingrese(document.write)

function Mostrar()
{
	var alumno;
	var nota;
	var notaSuma=0;
	var promedio;
	var contador=0;
	var respuesta = "si"; // o se puede poner "" y en el while != "no"
	var promedio;
	
	while(respuesta =="si")
	{
		contador++;
		alumno = prompt("Ingrese el nombre de un alumno:");
		nota = prompt("Ingrese la nota del alumno");
		nota = parseInt(nota);
		while(nota < 0 || nota >10)      //validacion
		{
			nota = prompt("Ingrese la nota del alumno");
			nota = parseInt(nota);
		}

		notaSuma = notaSuma + nota;

		respuesta = prompt("Ingrese si para continuar");
	}

	promedio = notaSuma/contador;

	document.write("La cantidad de alumnos es " + contador);
	document.write("<br> El promedio de las notas es " + promedio);
}
