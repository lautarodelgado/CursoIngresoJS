
function Mostrar()
{
	var lado;
	var superficie;

	lado = document.getElementById('laBase').value;

	lado = parseInt(lado);
	superficie = lado*lado;

	alert(superficie);


}
