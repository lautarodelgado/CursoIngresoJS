//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Escriba un numero:");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Escriba otro numero:");
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		document.write(numeroUno*numeroDos);
	}
		else
		{
			if(numeroUno > numeroDos)
			{
				document.write(numeroUno - numeroDos);
			}
				else
				{
					document.write(numeroUno + numeroDos);
				}
		}



	
}

