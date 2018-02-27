function Mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var preciosSuma;
	var preciosPromedio;

	precio1 = document.getElementById('precioUno').value;
	precio1 = parseInt(precio1);
	precio2 = document.getElementById('precioDos').value;
	precio2 = parseInt(precio2);
	precio3 = document.getElementById('precioTres').value;
	precio3 = parseInt(precio3);

	preciosSuma = precio1 + precio2 + precio3;
	preciosPromedio = preciosSuma/3;

	alert("La suma de los precios es " + preciosSuma + "  y su promedio " + preciosPromedio + ".");

}
