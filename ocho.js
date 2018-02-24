// hacer un ingreso de alumno, no sabemos cuantos alumnos hay, pedimos el nombre. Hay que mostrar cuàntos alumnos ingrese(document.write)

function Mostrar()
{
	var alumno;
	var sexo;
	var edad;
	var varones=0;
	var mujeres=0;
	var nota;
	var notaSuma=0;
	var promedio;
	var contador=0;
	var respuesta = "si"; // o se puede poner "" y en el while != "no"
	var promedio;
	var varonesDesaprobados=0;
	var maximo;
	var nombreNotaMaxima=alumno;
	var sumaNotaMujeres=0;
	var promedioMujeres;
	var sumaEdadAprobados=0;
	var aprobados=0;
	var promedioEdadesAprobados;
	var notasPares=0;
	var notasImpares=0;
	
	while(respuesta =="si")
	{
		contador++;
		alumno = prompt("Ingrese el nombre de un alumno:");
		sexo = prompt("Ingrese el sexo");
		//validación del sexo
		while(sexo !="f" && sexo !="m")
		{
			sexo = prompt("Ingrese el sexo");	
		}

		if(sexo == "f")
		{
			mujeres++;
		}
		if(sexo == "m")
		{
			varones++;
		}

		edad = prompt("Ingrese su edad:");
		edad = parseInt(edad);
		nota = prompt("Ingrese la nota del alumno");
		nota = parseInt(nota);
		//validación de las notas
		while(nota < 0 || nota >10)      //validacion
		{
			nota = prompt("Ingrese la nota del alumno");
			nota = parseInt(nota);
		}
		//cantidad de varoes desaprobados
		if(sexo=="m" && nota < 4)
		{
			varonesDesaprobados++;
		}
		//nombre de la mejor nota
		if(contador==1)
		{
			maximo = nota;
			maximo = nombreNotaMaxima;

		}
		else
		{
			if(nota > maximo)
			{	
				maximo = nota;
				maximo = nombreNotaMaxima;
			}
		}

		//promedio edades de aprobados
		if(nota > 4)
		{
			aprobados++;
			sumaEdadAprobados = sumaEdadAprobados + edad;
		}

		notaSuma = notaSuma + nota;

		//promedio de las mujeres
		if(sexo=="f")
		{
			sumaNotaMujeres = sumaNotaMujeres + nota;
		}

		if(nota%2==0 && nota!=0)
		{
			notasPares++;
		}
		else
		{
			if(nota!=0)
			{
				notasImpares++;
			}
		}

		respuesta = prompt("Ingrese si para continuar");
	}

	promedio = notaSuma/contador;
	promedioMujeres = sumaNotaMujeres/mujeres;
	promedioEdadesAprobados = sumaEdadAprobados/aprobados;

	document.write("La cantidad de alumnos es " + contador);
	document.write("<br> El promedio de las notas es " + promedio);
	document.write("<br> Hay " + varones + " varon/es y " + mujeres + " mujer/es");
	document.write("<br> Hay " + varonesDesaprobados + " desaprobado/s");
	document.write("<br>" + nombreNotaMaxima + " sacó la nota más alta");
	document.write("<br> El promedio de las notas de las mujeres es " + promedioMujeres);
	document.write("<br> El promedio de la edad de los aprobados es " + promedioEdadesAprobados);
	document.write("<br> La cantidad de notas pares es " + notasPares);
	document.write("<br> La cantidad de notas impares es " + notasImpares);
}


