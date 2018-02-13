//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Escriba un numero:");
	numeroDos = prompt("Escriba otro numero:");

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

