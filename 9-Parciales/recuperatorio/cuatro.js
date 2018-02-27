function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var sumaNumeros;

	primerNumero = prompt("Ingrese un número:");
	primerNumero = parseInt(primerNumero);

	segundoNumero = prompt("Ingrese otro número");
	segundoNumero = parseInt(segundoNumero);

	sumaNumeros = primerNumero + segundoNumero;

	if(sumaNumeros > 0)
	{
		document.write("El resultado de la suma es positivo");
	}
		else
		{
			if(sumaNumeros < 0)
			{
				document.write("El resultado de la suma es negativo");
			}
			else
				document.write("El resultado de la suma es 0");
		}



}
