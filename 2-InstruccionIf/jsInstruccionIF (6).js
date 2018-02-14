function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	if(edad > 17)   //si el if es de una sola linea puede no tener llaves, porque ejecuta una sola linea; lo mismo pasa con el else
	{
		alert("Es mayor de edad.");
	}
	else
	{
		if(edad > 12 && edad <18)
		{
			alert("Es adolescente.");
		}
		else
		{
			alert("Es un niño.");
		}
	}





}//FIN DE LA FUNCIÓN