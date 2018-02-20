function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);
		contador++;


		if(numero > 0)
		{
			positivo = positivo + numero;

		}
			else
			{
				if(numero < 0)
				{
					negativo = negativo*numero;
				}
			}

		respuesta = prompt("Ingrese si para continuar");


	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN