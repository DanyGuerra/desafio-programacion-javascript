function sumatoria(array){
     let suma=0;

    for(let i=0; i<array.length; i++){
        suma = array[i] + suma;
    }

    return suma;
}

//console.log(sumatoria([1,4,7,20]));



function productoria(array){
    let total = 1;

   for(let i=0; i < array.length; i++){
        total=total*array[i];
   }

   return total;
}

//console.log(productoria([1,4,7,20]));


function factorial (n) {
	let total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;
}

//console.log(factorial(5));


function sumatoriaBajoImporte(array){
    let suma=0;

   for(let i=0; i<array.length; i++){

        if(array[i] <= 1000 && array[i] > 0){
            suma = array[i] + suma;
        }

   }

   return suma;
}

//console.log(sumatoriaBajoImporte( [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));



function asientosDisponibles(disponibles, deseado){
    libres = disponibles.length;
    if(disponibles.indexOf(deseado) >= 0){
       return 'Felicitaciones, el asiento número ' + deseado + ' está disponible';
    }
    else{
        return 'Lo sentimos, el asiento número ' + deseado + ' está ocupado, pero aún quedan ' + libres + ' asientos disponibles';
    }

}
//console.log(asientosDisponibles([3, 2, 6, 9, 10, 4], 5));


//let numerosSorteados = [ 12 , 4 , 40 , 33 , 13 , 17 ];
//let numerosJugados = [ 130 , 12 ,13 , 17 , 33 , 40 ];

function esPremioMayor(sorteados, jugados){

    coincidencias =  0;

    for(let i=0; i < jugados.length; i++){
        if(sorteados.indexOf(jugados[i]) >= 0){
            coincidencias++;
        }
    }

    if(coincidencias==6){
        return 'Ganaste';
    }else{
        return 'Seguí participando';
    }

}


console.log(esPremioMayor([1, 3, 20, 4, 2, 9], [9, 3, 1, 2, 20, 4]));
//console.log(esPremioMayor([1, 3, 20, 4, 2, 9], [5, 3, 1, 2, 9, 8]));



function laClaveSecreta(array){
    longitud = array.length - 1;
    mensaje = '';
    for(let i = longitud; i>=0; i--){
        if(array[i] == '*'){
            mensaje = mensaje+ '';
        }
        else{
        mensaje = mensaje + array[i];
        }
    }
    return mensaje;
}


//console.log(laClaveSecreta( [ "a", "*", "l", "o", "h"]));
//console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ",   "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] )); // el dia es lunes
console.log(laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] ));  //Clave desifrada


function MathChallenge(num) {

    // code goes here
  let total = 0;

	for (let i=1; i<=num; i++) {
		total = total + i;
	}
  return total;
}

// keep this function call here
//console.log(MathChallenge(12));




function MathChallenge(num1,num2) {

    // code goes here

    if(num1 > num2){
        return 'false';
    }
    else if(num1 < num2){
        return 'true';
    }
    else {
        return '-1';
    }

  }

  // keep this function call here
  //console.log(MathChallenge(10,7));


  (function() {
    var a = b = 5;
  })();

  //console.log(b);