function Mostrar()
{
	var edad;
	var sexo;
	var contador=0;
	var edadSuma=0;
	var edadPromedio;
	var minimo;
	var varonesMas19=0;

	while(contador < 100)
	{
		contador++;
		edad = prompt("Ingrese la edad:")
		edad = parseInt(edad);

		while(edad > 100 || edad < 0 || isNaN(edad))
		{
			edad = prompt("Ingrese la edad:")
			edad = parseInt(edad);
		}

		edadSuma = edadSuma + edad;

		sexo = prompt("Ingrese f o m:");

		while(sexo != "m" && sexo != "f")
		{
			sexo = prompt("Ingrese f o m:");
		}

		if(contador==1)
		{
			minimo = edad;
		}
		else
		{
			if(edad < minimo)
			{
				minimo = edad;
			}
		}

		if(sexo == "m" && edad > 19)
		{
			varonesMas19++;
		}
	}

	edadPromedio = edadSuma/contador;

	alert("El promedio de las edades es " + edadPromedio + ". La edad más baja es " + minimo + ". La cantidad de varones con edad mayor o igual a 20 es " + varonesMas19);
}
