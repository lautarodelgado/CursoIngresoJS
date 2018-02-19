/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidad;
	var marca;
	var precio;
	var precioFinal;
	var porcentaje;
	var precioBruto;
	var descuento;

	cantidad = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;

	precio = 35;
	precioBruto = cantidad*precio;
	porcentaje = 0;

	if(cantidad > 5)
	{
		porcentaje = 0.5;
	}
	else
	{
		if(cantidad == 5 && marca == "ArgentinaLuz")
		{
			porcentaje = 0.4;
		}
		else
		{
			if(cantidad == 5 && marca != "ArgentinaLuz")
			{
				porcentaje = 0.3;
			}
			else
			{
				if(cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
				{
					porcentaje = 0.25;
				}
				else
				{
					if(cantidad == 4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas")
					{
						porcentaje = 0.20;
					}
					else
					{
						if(cantidad == 3 && marca == "ArgentinaLuz")
						{
							porcentaje = 0.15;
						}
						else
						{
							if(cantidad == 3 && marca == "FelipeLamparas")
							{
								porcentaje = 0.10;
							}
							else
							{
								if(cantidad == 3 && marca != "ArgentinaLuz" || marca != "FelipeLamparas")
								{
									porcentaje = 0.5;
								}
							}
						}
					}
				}
			}
		}
	}





	descuento = precioBruto*porcentaje;
    precioFinal = precioBruto - descuento;

    document.getElementById("precioDescuento").value = precioFinal;


















































	/*
	var precio;
	var cantidadLamparas;
	var descuento;
	var marca;
	var precioF;      //sería el número de lámparas multiplicado por el precio final (35)
	var descuento;              //descuento del 50% comprando como mínimo 6 lámparas independientemente de la marca
	var descuentoArgentinaLuz;  //descuento del 60% comprando ArgentinaLuz
	var descuentoOtraMarca;     //descueto del 30% comprando cualquier marca que no sea ArgentinaLuz
	
	cantidadLamparas = document.getElementById('Cantidad').value;
	marca = document.getElementById('Marca').value;


	precio = 35;
	lamparasPorPrecio = cantidadLamparas*precio;
	descuento = lamparasPorPrecio*0.5;
	descuentoArgentinaLuz = lamparasPorPrecio*0.4;
	descuentoOtraMarca = lamparasPorPrecio*0.7;

	if(cantidadLamparas > 5)
	{
		document.getElementById('precioDescuento').value = descuento;
	}
	else
	{
		if(cantidadLamparas > 4 && marca == "ArgentinaLuz")
		{
			document.getElementById('precioDescuento').value = descuentoArgentinaLuz;
		}
		else
		{
			if(cantidadLamparas > 4 && marca != "ArgentinaLuz")
			{
				document.getElementById('precioDescuento').value = descuentoOtraMarca;

			}

		}
	}

	/*
	if(cantidadLamparas > 4 && marca == "ArgentinaLuz")
	{
		document.getElementById('precioDescuento').value = descuentoArgentinaLuz;
	}
	else
	{
		if(cantidadLamparas > 4 && marca != "ArgentinaLuz")
		{
			document.getElementById('precioDescuento').value = descuentoOtraMarca;

		}

	}
	*/
	




 	
}
