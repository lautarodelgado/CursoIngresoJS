//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
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
	
}

