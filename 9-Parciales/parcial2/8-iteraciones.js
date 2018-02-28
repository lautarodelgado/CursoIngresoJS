//se ingresa hasta que el usuario quiera el nombre de u animal, el peso del mismo(validar que sea mayor a 0) y la temperatura 
//del habitat de este animal(validar entre -40 y 40). Informar la cantidad de temperaturas pares
//la cantidad de temperaturas impares
//el nombre del animal más pesado
//el nombre del animal menos pesado
//la cantidad de animales que viven en habitat menores a 0 inclusive
//el promedio del peso de todos los animales
//la temperatura máxima y la mínima

//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var respuesta="";
	var contador=0;
	var temperaturasPares=0;
	var temperaturasImpares=0;
	var maximo;
	var minimo;
	var nombreMaximo;
	var nombreMinimo;
	var animalesMenoresCero=0;
	var acumuladorPeso=0;
	var promedio;
	var temperaturaMinima;
	var temperaturaMaximo;

	while(respuesta !="no")
	{
		contador++;
		nombre = prompt("Ingrese el nombre del animal:");
		//peso y validación y suma del peso
		peso = prompt("Ingrese el peso del animal:");
		peso = parseInt(peso);
		while(peso < 1 || isNaN(peso))
		{
			peso = prompt("Ingrese el peso del animal:");
			peso = parseInt(peso);
		}

		acumuladorPeso = acumuladorPeso + peso; 
		//temperatura y validación
		temperatura = prompt("Ingrese la temperatura del hábitat:");
		while(temperatura < -40 || temperatura > 40 || isNaN(temperatura))
		{
			temperatura = prompt("Ingrese la temperatura del hábitat:");
		}
		//cantidad de temperaturas pares e impares
		if(temperatura%2==0 && temperatura !=0)
		{
			temperaturasPares++;
		}
		else
		{
			if(!(temperatura%2==0) && temperatura !=0)
			{
				temperaturasImpares++;
			}
		}
		//nombre del animal más y menos pesado y el peso máximo y mínimo y temperatura mínima y máxima
		if(contador==1)
		{
			minimo = peso;
			nombreMinimo = nombre;
			maximo = peso;
			nombreMaximo = nombre;
			temperaturaMinima = temperatura;
			temperaturaMaximo = temperatura;
		}
		else
		{
			if(peso < minimo)
			{
				minimo = peso;
				nombreMinimo = nombre;
			}
			if(peso > maximo)
			{
				maximo = peso;
				nombreMaximo = nombre;
			}
			if(temperatura < temperaturaMinima)
			{
				temperaturaMinima = temperatura;
			}
			if(temperatura > temperaturaMaximo)
			{
				temperaturaMaximo = temperatura;
			}
		}
		//animales que viven en temperaturas menores a 0
		if(temperatura < 0)
		{
			animalesMenoresCero++;
		}
		respuesta = prompt("Ingrese no para salir:");
	}

	promedio = acumuladorPeso/contador;

	document.write("<br> La cantidad de temperaturas pares es " + temperaturasPares);
	document.write("<br> La cantidad de temperaturas impares es " + temperaturasImpares);
	document.write("El nombre del animal con peso mínimo es " + nombreMinimo);
	document.write("<br> El nombre del animal con mayor peso es " + nombreMaximo);
	document.write("<br> La cantidad de animales que viven en temperaturas menores a cero son " + animalesMenoresCero);
	document.write("<br> El promedio del peso de los animales es " + promedio);
	document.write("<br> La temperatura mínima es " + temperaturaMinima);
	document.write("<br> La temperatura máxima es " + temperaturaMaximo);
	
}

