function Mostrar()
{

	for(contador=0 ;  ; contador++)
	{
		document.write("<br>" + contador);
		if(contador == 10)
		{
			break;
		}
		if(contador == 5)
		{
			continue;
		}

		document.write("Despues del continue");  //para cada uno de los contadores va a mostrar "Despues del continue" excepto en el 5
	}
	document.write("Fin del for"); 
}
