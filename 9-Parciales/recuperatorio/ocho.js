function Mostrar()
{
	var numero;
	var respuesta="si";
	var contador=0;
	var numerosPares=0;
	var sumaNumeros=0;
	var promedio;
	var minimo;
	var maximo;

	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);

		while(numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un número:");
			numero = parseInt(numero);
		}

		sumaNumeros = sumaNumeros + numero;

		if(numero%2==0 && numero !=0)
		{
			numerosPares++;
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
				maximo = numero;
			}
		}

		respuesta = prompt("Ingrese si para continuar:");

	}

	promedio = sumaNumeros/contador;

	document.write("La cantidad de números pares es " + numerosPares);
	document.write("<br> El promedio de los números ingresadoes es " + promedio);
	document.write("<br> La suma de todos los números ingresados es " + sumaNumeros);
	document.write("<br> El número mínimo es " + minimo + " y el número máximo es " + maximo);
}
