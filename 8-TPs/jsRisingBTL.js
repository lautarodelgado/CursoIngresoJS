/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldo;
 	var legajo;
 	var nacionalidad;
 	var contador=0;

 	while(contador < 2)
 	{
 		contador++;
 		//edad y edad validada
 		edad = prompt("Ingrese la edad:");
 		while(edad < 18 || edad > 90 || isNaN(edad))
 		{
 			edad = prompt("Ingrese la edad:");
 		}
 		//sexo y validación
		sexo = prompt("Ingrese f o m:");
		while(sexo !="m" && sexo !="f")
		{
			sexo = prompt("Ingrese f o m:");
		}
	

 		//estado civil
 		



 		//sueldo bruto
 		sueldo = prompt("Ingrese el sueldo bruto:");
 		while(sueldo < 8000)
 		{
 			sueldo = prompt("Ingrese el sueldo bruto:");
 		}
 		//numero de legajo
 		legajo = prompt("Ingrese el número de legajo:");
 		while(legajo < 999 || legajo > 9999 || isNaN(legajo))
 		{
 			legajo = prompt("Ingrese el número de legajo:");
 		}
 		//nacionalidad
 		nacionalidad = prompt("Ingrese A para argentinos, E para extranjeros, o N para nacionalizdos:");
 		while(nacionalidad !="A" && nacionalidad !="E" && nacionalidad !="N")
 		{
 			nacionalidad = prompt("Ingrese A para argentinos, E para extranjeros, o N para nacionalizdos:");
 		}
 		
 	}
}
