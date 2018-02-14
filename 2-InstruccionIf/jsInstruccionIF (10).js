function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor((Math.random() * 10 + 1));

	if(nota > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota > 3 && nota < 9)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}
	


	//OTRA FORMA DE HACERLO:
	
	/* 
	if(nota > 8)
	{
		alert("EXCELENTE");
	}

	if(nota > 3 && nota < 9)
	{
		alert("APROBÓ");
	}

	if(nota < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	*/

	//console.log(nota);

}//FIN DE LA FUNCIÓN