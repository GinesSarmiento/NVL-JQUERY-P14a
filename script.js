
$( document ).ready(function() {
	
	//Declaramos las variables que se usarán como valores iniciales de las coordenadas
	var posX_ini;
	var posY_ini;
	//Asignamos los eventos al elemento imagen
	$( "#imagen" ).on({
		//El evento mouseover para cambiar el tipo de cursor mediante una propiedad css
		"mouseover": function() { $(this).css("cursor","crosshair"); },
		//Usamos el evento mouseenter para almacenar la posición en los ejes X e Y en el momento en el que entra el ratón sobre la imagen
		"mouseenter": function(event) { posX_ini = event.pageX; posY_ini = event.pageY; },
		//El evento mousemove para cambiar la opacidad y la altura de la imagen
		"mousemove": function(event) { 
			//Obtenemos las posiciones de las coordenadas X e Y actuales
			var posX_fin = event.pageX;
			var posY_fin = event.pageY;

			//Calculamos la opacidad a partir del valor actual de la opacidad del elemento y de las posiciones inicial y final del eje X
			var opacidad = $( this ).css("opacity") - (posX_ini - posX_fin)*0.01;
			
			//Comprobamos que el valor calculado está entre los valores 0 y 1
			if (opacidad < 0){
				opacidad = 0;
			}else if (opacidad >1){
				opacidad = 1;
			}

			//Calculamos la altura a partir del valor actual de la altura y la diferencia de las posiciones iniciales y finales del eje Y
			var altura = $( this ).height() - (posY_fin - posY_ini);

			//Asignamos los valores calculados a las propiedads del elemento
			$( this ).css("opacity",opacidad);
			$( this ).height(altura);

			//Asignamos como posiciones iniciales las posiciones actuales para el inicio de la siguiente ejecución
			posX_ini=posX_fin;
			posY_ini = posY_fin;
		}
	});



});