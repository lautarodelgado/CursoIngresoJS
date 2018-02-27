//Mostrar el importe final, pedir el precio y el porcentaje de descuento.
function Mostrar()
{
	var precio;
	var descuento;
	var descuentoPorcentaje;
	var precioFinal;

	precio = prompt("Ingrese el precio");
	descuento = prompt("Ingrese el descuento");

	descuentoPorcentaje = (precio*descuento)/100;

	precioFinal = precio - descuentoPorcentaje;

	document.getElementById('importeFinal').value = precioFinal;
}
