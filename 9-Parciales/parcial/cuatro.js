//ingreso 3 nùmeros, saber cual es el mayor
function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var tercerNumero;
	var sumaNumeros;
	var promedio;
	var maximo;
	var minimo;

	primerNumero = prompt("Ingrese un numero:");
	primerNumero = parseInt(primerNumero);
	segundoNumero = prompt("Ingrese otro numero:");
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = prompt("Ingrese otro numero");
	tercerNumero = parseInt(tercerNumero);

	//número máximo
	if(tercerNumero > segundoNumero && tercerNumero > primerNumero)
	{
		maximo = tercerNumero
 
	}
	else
	{
		if(segundoNumero > primerNumero && segundoNumero > tercerNumero)
		{
			maximo = segundoNumero;
		}
		else
		{
			maximo = primerNumero;
		}

	}

	//número mínimo
	if(tercerNumero < segundoNumero && tercerNumero < primerNumero)
	{
		minimo = tercerNumero;
	}
	else
	{
		if(segundoNumero < primerNumero && segundoNumero < tercerNumero)
		{
			minimo = segundoNumero;
		}
		else
		{
			minimo = primerNumero;
		}
	}

	alert("El numero mayor es " + maximo);
	alert("El numero minimo es " + minimo);























	/*
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Ingrese un número:");
	numeroDos = prompt("Ingrese otro número:");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		alert(numeroUno*numeroDos);
	}

		else
		{
			if(numeroUno > numeroDos)
			{
			alert(numeroUno - numeroDos);
			}
			else
			{
				alert(numeroUno + numeroDos);
			}
		}

		*/

			









}
