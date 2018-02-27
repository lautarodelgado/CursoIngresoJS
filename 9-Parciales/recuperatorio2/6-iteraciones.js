//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador=0;
	var minimo;
	var maximo


	while(contador<7)
	{
		contador++;
		importe = prompt("Ingrese el importe del día");
		importe = parseInt(importe);
		//validación
		while(importe < 0)
		{
			importe = prompt("Ingrese el importe del día");
			importe = parseInt(importe);
		}

		if(contador==1)
		{
			minimo = importe;
			maximo = importe;
		}
		else
		{
			if(importe < minimo)
			{
				minimo = importe;
			}
			if(importe > maximo)
			{
				maximo = importe;
			}
		}
	}	

	document.write("El número mínimo es " + minimo);
	document.write("<br> El número máximo es " + maximo);
}

