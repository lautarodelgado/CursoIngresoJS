//pedir una letra hasta que el cliente quiera, validar que sea una letra(no un numero). y se van a ingresan
//numeros entre -200 y 200. Mostrar la letra del numero mas bajo. El promedio de todos los numeros ingresados
//despues de una vocal. la letra del máximo y la letra del minimo
function Mostrar()
{
	var letra;
	var numero;
	var respuesta="si";
	var contador=0;
	var contadorNoVocal=0;
	var acumulador=0;
	var promedio;
	var letraMaxima;
	var letraMinima;

	while(respuesta !="no")
	{
		contador++;
		letra = prompt("Ingresa una letra");
		//validacion letra
		while(!(isNaN(letra)))
		{
			letra = prompt("Ingresa una letra");
		}

		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		//validacion numero
		while(numero < -200 || numero > 200 || isNaN(numero))
		{
			numero = prompt("Ingrese un número");
			numero = parseInt(numero);
		}

		if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
		{
			contadorNoVocal++;
			acumulador = acumulador + numero;
		}

		if(contador==1)
		{
			minimo = numero;
			letraMinima = letra;
			maximo = numero;
			letraMaxima = letra;
		}
		else
		{
			if(numero < minimo)
			{
				minimo = numero;
				letraMinima = letra;

			}
			if(numero > maximo)
			{
				maximo = numero;
				letraMaxima = letra;
			}
		}
		respuesta = prompt("Escriba no para salir");
	}
	promedio = acumulador/contadorNoVocal;

	document.write("<br> El promedio entre los números es " + promedio);
	document.write("<br> La letra minima es " + letraMinima);
	document.write("<br> La letra maxima es " + letraMaxima);


}
