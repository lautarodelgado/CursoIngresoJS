//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var contador=0;
	var respuesta=""
	var contadorPares=0;
	var suma=0;
	var promedio;
	var minimo;
	var maximo;

	while(respuesta !="no")
	{
		contador++;
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		while(numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un número:");
			numero = parseInt(numero);
		}

		suma = suma + numero;

		if(numero%2==0 && numero!=0)
		{
			contadorPares++;
		}

		if(contador==1)
		{
			minimo = numero;
			maximo = numero;
		}
		else
		{
			if(numero < minimo)
			{
				minimo = numero;
			}
			if(numero > maximo)
			{
				maximo = numero
			}
		}



		respuesta = prompt("Ingrese no para salir");
	}	


	promedio = suma/contador;

	document.write("La cantidad de números pares es " + contadorPares);
	document.write("<br> El promedio de los números es " + promedio);
	document.write("<br> La suma de todos los números ingresados es " + suma);
	document.write("<br> El número mínimo es " + minimo);
	document.write("<br> El número máximo es " + maximo);
}

