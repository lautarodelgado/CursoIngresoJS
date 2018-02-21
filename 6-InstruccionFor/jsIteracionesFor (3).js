function Mostrar()
{
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;

	var numeroRandom;
	for(contador=0; contador < 100; contador++)
	{
		numeroRandom = Math.floor(Math.random() *10);
		document.write("<br>" + numeroRandom);
		switch(numeroRandom)
		{
			case 0:
			contador0++;
			break;

			case 1:
			contador1++;
			break;

			case 2:
			contador2++;
			break;

			case 3:
			contador3++;
			break;

			case 4:
			contador4++;
			break;

			case 5:
			contador5++;
			break;

			case 6:
			contador6++;
			break;

			case 7:
			contador7++;
			break;

			case 8:
			contador8++;
			break;

			case 9:
			contador9++;
			break;	
		}
	}
	document.write("<br> Cantidad de 0: " + contador0);
	document.write("<br> Cantidad de 1: " + contador1);
	document.write("<br> Cantidad de 2: " + contador2);
	document.write("<br> Cantidad de 3: " + contador3);
	document.write("<br> Cantidad de 4: " + contador4);
	document.write("<br> Cantidad de 5: " + contador5);
	document.write("<br> Cantidad de 6: " + contador6);
	document.write("<br> Cantidad de 7: " + contador7);
	document.write("<br> Cantidad de 8: " + contador8);
	document.write("<br> Cantidad de 9: " + contador9);









	/*
	var repeticiones;
	repeticiones = prompt("ingrese el número de repeticiones");
	*/



}//FIN DE LA FUNCIÓN