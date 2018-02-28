//no se tiene que validar y no se usa while, solo IF. Se ingresan dos números, si son iguales se concatenan, si el mayor es 
//el primero se multiplican, de lo contrario se restan
//si la multiplicacion es par agrear la palabra es par al lado del resultado
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var par;

	numeroUno = prompt("Ingrese un número:");
	numeroDos = prompt("Ingrese otro número:");

	if(numeroUno == numeroDos)
	{
		resultado = numeroUno + numeroDos;
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		if(numeroUno > numeroDos)
		{
			resultado = numeroUno*numeroDos;

		}
		else
		{
			resultado = numeroUno - numeroDos;
		}
	}

	alert(resultado);
	












	/*
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Ingrese un número:");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingrese otro número:");
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

