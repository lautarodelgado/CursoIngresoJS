// hacer un ingreso de alumno, no sabemos cuantos alumnos hay, pedimos el nombre. Hay que mostrar cuàntos alumnos ingrese(document.write)

function Mostrar()
{
	var contador=0;
	var respuesta = "si"; // o se puede poner "" y en el while != "no"
	var alumno;

	while(respuesta == "si")
	{
		contador++;
		alumno = prompt("Ingrese el nombre de un alumno:");
		respuesta = prompt("Ingrese si para continuar");
	}
	document.write(contador);
}
