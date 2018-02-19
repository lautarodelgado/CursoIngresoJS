/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var aCentigrados;

	temperaturaFahrenheit = document.getElementById('Temperatura').value;

	aCentigrados = (temperaturaFahrenheit - 32)/1.8000;

	alert(temperaturaFahrenheit + " Fahrenheit son " + aCentigrados + " centígrados.");	
}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados;
	var aFarenheit;

	temperaturaCentigrados = document.getElementById('Temperatura').value;

	aFarenheit = (9/5 * temperaturaCentigrados) + 32;
	alert(temperaturaCentigrados + " centígrados son " + aFarenheit + " Fahrenheit.");
	
}
