function Mostrar()
{
	var contador=-10;
	var iteraciones=10;
	var contadorDePares=0;
	var contadorDeImpares=0;
	var contadorCeros=0;
	var contadorPositivo=0;
	var contadorNegativo=0;

	for( ;  ; )  // los ";" separan distintas instrucciones...entra, verifica, hace el proceso y suma(solo la primero vez); luego suma, verifica y procesa, por lo que el contador vale 10 (afuera)
	{
		document.write("<br>" + contador);

		//FALTAN CORREGIR COSAS
		if(contador==0)
		{
			contadorCeros++;
		}
		else
		{	
			if(contador%2==0)
			{
				contadorDePares++;
			}
			else
			{
				contadorDeImpares++;
			}
				if(contador > 0)
				{
					contadorPositivo++;
				}
				else
				{
					if(contador < 0)
					{
						contadorNegativo++;
					}
				
				}
		}


		

		contador++;
		if(contador == 10)
		{
			break;
		}
	}
		//document.write("<br>" + contador);
		document.write("<br> Pares: " + contadorDePares);
		document.write("<br> Impares: " + contadorDeImpares);
		document.write("<br> Ceros: " + contadorCeros);
		document.write("<br> Positivos: " + contadorPositivo);
		document.write("<br> Negativos: " + contadorNegativo);



}