function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador < 5)
	{
		contador++;
		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);
		acumulador = acumulador+numero;
	}

	promedio = acumulador/contador;
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN