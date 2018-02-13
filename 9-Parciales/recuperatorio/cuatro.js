function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var sumaNumeros;

	primerNumero = prompt("Ingrese un número:");
	segundoNumero = prompt("Ingrese otro número");

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	sumaNumeros = primerNumero + segundoNumero;

	if(sumaNumeros > 0)
	{
		alert("positivo");
	}
		else
		{
			if(sumaNumeros < 0)
			{
				alert("negativo");
			}
			else
				alert("neutro");
		}



}
