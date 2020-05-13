// arreglos
// var x = [7, 9, 3, 1, 2, "AL", "UL"]

// console.log(x[0]);
// console.log(x[1]);
// console.log(x[2]);

// console.log('Empezando');
// for(var i = 1000; i>=1; i--) {
//     console.log(i);
// }
// console.log('termino');

// var suma = 0;
// for(var i = 0; i<=10; i++) {
//     suma = suma + i;
// }
// console.log(suma);

// var arrayStrings = ['PERRO', 'GATO','CONEJO','HAMSTER','CABALLO']

// for(var i = 0; i<arrayStrings.length; i++) {
//     console.log(arrayStrings[i]);
// }



// FUNCIONES

// Es la declaración de la función
function suma(numeroUno, numeroDos) {
    console.log(numeroUno + numeroDos)
}

function esNumeroPar(unNumero) {
    if ((unNumero % 2) == 0) {
        alert('Es número par');
    } else {
        alert('NO es numero par');
    }
}

function recorreAreglos(arreglo) {
    for(var i = 0; i<arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// La ejecución de mi función suma
// suma(11, 22)

// var numeroUsuarioString = prompt('Dame un numero y te digo si es numero par ;)')
// var numerousuario = parseInt(numeroUsuarioString)

// esNumeroPar(numerousuario)

var x = ['PERRO', 'GATO','CONEJO','HAMSTER','CABALLO']
var y = ['MANZANA', 'PERA', 'PLATANO', 'DURAZNO', 'FRESA', 'KIWI']
var z = ['CORONA', 'VICTORIA', 'SOL', 'INDIO', 'DOS X', 'TEMPUS', 'IRON MAIDEN']
// recorreAreglos(z)
// esNumeroPar(30)
