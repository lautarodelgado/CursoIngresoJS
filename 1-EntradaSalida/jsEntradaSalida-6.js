/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{/*
	var numeroUno;
	var numeroDos;

	numeroUno = "2";  //palabra 2 (por las comillas) (siempre que pueda, la màquina lo convierte en un numero, si no pudiera sale NaN)
	numeroDos = 3;    //nùmero 2
	resultado = numeroUno + numeroDos; //el + no solo suma, concatena (para sumar deben ser dos numeros)
	alert(resultado);

	*/

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	alert(numeroUno + numeroDos);





}

