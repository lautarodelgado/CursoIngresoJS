function Mostrar()
{

	var contador=0;
	var negativos=0;
	var positivos=0;	
	var respuesta="si";
	var numero;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var cantidadImpares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
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
			cantidadNegativos++;
			promedioNegativos = negativos/cantidadNegativos;
		}
		else
		{
			if(numero > 0)
			{
				positivos = positivos + numero;
				cantidadPositivos++;
				promedioPositivos = positivos/cantidadPositivos;
			}
		}

		if(numero==0)
		{
			cantidadCeros++;
		}
		else
		{
			if(numero%2 == 0)
			{
				cantidadPares++;
			}
			else
			{
				cantidadImpares++;
			}
		}

		diferenciaPositivosNegativos = positivos - negativos;
		

	
	}

	document.write("<br>" + negativos);
	document.write("<br>" + positivos);
	document.write("<br>" + cantidadPositivos);
	document.write("<br>" + cantidadNegativos);
	document.write("<br>" + cantidadCeros);
	document.write("<br>" + cantidadPares);
	document.write("<br>" + cantidadImpares);
	document.write("<br>" + promedioPositivos);
	document.write("<br>" + promedioNegativos);
	document.write("<br>" + diferenciaPositivosNegativos);
 

}//FIN DE LA FUNCIÓN

