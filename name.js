//Dos funciones cifrar y descifrar , prompt que me pida qué quiero hacer , si 1 hago esto si 2 esto otro

function ejCifradoCesar(){
	do{
		var respuestaUsuario= prompt("Hola! Ingresa 1 si quieres cifrar o 2 si quieres descifrar");
		if (respuestaUsuario !=""){
			if (respuestaUsuario=="1"){
				cifrar();
			} else if (respuestaUsuario=="2"){
				descifrar();
			} else {
				alert ("Ingresa 1 si quieres cifrar o 2 si quieres descifrar");
			}
		}
	} while (respuestaUsuario=="" || (respuestaUsuario!= "1" && respuestaUsuario !="2"));
}

var cifrar = function(ingresaPalabra) {
	ingresaPalabra= prompt ("Ingresa la palabra que quieres cifrar:");

		var cifrado = ''; //Haciendo una variable de tipo string vacía

	for (var i = 0; i < ingresaPalabra.length; i ++) { //Con un for recorremos toda la palabra ingresada

		var aCifrar = ingresaPalabra[i]; // Creamos una variable que identifique el carácter a cifrar

		if (aCifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra

			var toAscci = ingresaPalabra.charCodeAt(i); //Y buscamos el número Ascci de esa letra

			if ((toAscci >= 65) && (toAscci<= 90))  // Si son mayúsculas ocupamos:
				aCifrar = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);

			else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
				aCifrar = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
		}
		cifrado += aCifrar; // Creamos la nueva cadena
	}
	return alert(cifrado); // Retornamos un alert con el mensaje encriptado
};

var descifrar = function(ingresaPalabra) {
	ingresaPalabra= prompt ("Ingresa la palabra que quieres descifrar:");

		var descifrado = ''; //Haciendo una variable de tipo string vacía

	for (var i = 0; i < ingresaPalabra.length; i ++) { //Con un for recorremos toda la palabra ingresada

		var aDescifrar = ingresaPalabra[i]; // Creamos una variable que identifique el caraácter a descifrar

		if (aDescifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra

			var toAscci = ingresaPalabra.charCodeAt(i); //Y buscamos el número Ascci de esa letra

			if ((toAscci >= 65) && (toAscci<= 90))  // Si son mayúsculas ocupamos:
				aDescifrar = String.fromCharCode(((toAscci - 65 -7 + 52) % 26) + 65);

			else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
				aDescifrar = String.fromCharCode(((toAscci - 97 -7 + 52 ) % 26) + 97);
		}
		descifrado += aDescifrar; // Creamos la nueva cadena
	}
	return alert(descifrado); // Retornamos un alert con el mensaje desencriptado
};

ejCifradoCesar();