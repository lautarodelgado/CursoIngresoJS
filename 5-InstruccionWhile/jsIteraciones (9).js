function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;

	var respuesta='si';

	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if(contador ==1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo = numero;
			}
		}

		respuesta = prompt("Ingresi si para continuar");

	
	}

		document.getElementById('maximo').value = maximo;
		document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN