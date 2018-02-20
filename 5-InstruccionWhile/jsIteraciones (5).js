function Mostrar()
{
	var sexo 
	sexo = prompt("ingrese f ó m .");

	while(sexo!="f" && sexo!="m")
	{
		sexo = prompt("ingrese f ó m .");
	}

	if(sexo == "m")
	{
		document.getElementById('Sexo').value="Masculino";
	}
	if(sexo == "f")
	{
		document.getElementById('Sexo').value="Femenino";
	}

}//FIN DE LA FUNCIÓN