function Mostrar()
{
	var diaDeLaSemana;

	diaDeLaSemana = prompt("Ingrese un día de la semana");

	switch(diaDeLaSemana)
	{
		case "Sábado":
		case "Domingo":
			alert("es fin de semana");
			break;

		case "Lunes":
		case "Martes":
		case "Miércoles":
		case "Jueves":
		case "Viernes":
			alert("a trabajar !!!");
	}
}
