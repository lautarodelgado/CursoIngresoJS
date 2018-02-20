function Mostrar()
{

	var contador=0;
	var negativos=0;
	var positivos=0;	
	var respuesta="si";
	var numero;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	while(respuesta == "si")
	{
		contador++
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		respuesta = prompt("Escriba si para continuar");


		if(numero < 0)
		{
			negativos = negativos + numero;
		}
		else
		{
			if(numero > 0)
			{
				positivos = positivos + numero;
			}
			else
			{
				if(numero > 0)
				{
					cantidadPositivos = cantidadPositivos + contador;
				}
			}

			if(numero < 0)
				{
					cantidadNegativos = cantidadNegativos + contador;
				}
			
		}

		
	
	}

	document.write("<br>" + negativos + "<br>" + positivos + "<br>" + cantidadPositivos + "<br>" + cantidadNegativos);

}//FIN DE LA FUNCIÓN