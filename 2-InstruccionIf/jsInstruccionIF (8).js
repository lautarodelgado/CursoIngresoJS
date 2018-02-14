function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	//console.log("hola"); --> solamente se va a ver en la consola (F12)

	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	if(estadoCivil == "Soltero" && edad > 17)
	{
		alert("Es soltero y no es menor.");
	}
	else
	{
		console.log("NO HACER NADA");
	}



}//FIN DE LA FUNCIÓN