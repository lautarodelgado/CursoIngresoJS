// ingresar nùmeros hasta que el cliente quiera. Los numeros van a a estar entre -50 y 50; informar cuántos pares e impares hay
//y el promedio de los ppsitivos y el máximo y el mínimo
function Mostrar()
{
	var numero;
	var respuesta = "";
	var contador=0;
	var acumulador=0;
	var acumuladorPositivos=0;
	var pares=0;
	var impares=0;
	var promedio;
	var minimo;
	var maximo;

	while(respuesta != "no")
	{
		contador++;

		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);
		//validación
		while(numero < -50 || numero > 50 || isNaN(numero))
		{
			numero = prompt("Ingrese un número:");
			numero = parseInt(numero);
		}
		//suma
		if(numero > 0)
		{
			acumuladorPositivos++;
			acumulador = acumulador + numero;
		}

		if(numero%2==0 && numero!=0)
		{
			pares++;
		}
		else
		{
			if(numero!=0)
			impares++;
		}
		//maximo y minimo
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
		respuesta = prompt("Escriba no para salir");
	}

	promedio = acumulador/acumuladorPositivos;
	document.write("El promedio es " + promedio);
	document.write("<br> La cantidad de numeros pares es " + pares);
	document.write("<br> La cantidad de numeros impares es " + impares);
	document.write("<br> El numero minimo es " + minimo);
	document.write("<br> El número máximo es " + maximo);
	
}
