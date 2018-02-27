function Mostrar()
{
	var peso;
	var contador=0;
	var minimo;
	var maximo;
	var contenedorMinimo;
	var contenedorMaximo;

	while(contador < 50)
	{
		contador++;
		peso = prompt("Ingrese el peso:");

		while(peso < 0 || isNaN(peso))
		{
			peso = prompt("Ingrese el peso:");
		}

		if(contador==1)
		{
			minimo=peso;
			contenedorMinimo = contador;
			maximo=peso;
			contenedorMaximo = contador;
		}
		else
		{
			if(peso < minimo)
			{
				minimo = peso;
				contenedorMinimo = contador;
			}
			if(peso > maximo)
			{
				maximo = peso;
				contenedorMaximo = contador;
			}
		}
	}

	document.write("<br> El menos pesado fue el contenedor número " + contenedorMinimo);
	document.write("<br> El más pesado fue el contenedor número " + contenedorMaximo);

}
