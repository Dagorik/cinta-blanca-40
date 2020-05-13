// alert("Este es un mensaje desde main.js");

// Variables y tipos de datos

var numero = 20 // --> Number

var texto = "Hola mundo" // --> String
var textoDos = 'Hola mundo dos'  // --> String


// Tipo de dato Number
var sumaTotal = 30 + 50
var multiplicacion = 3 * 5
var algoritmoComplejo = 40 * (30 + 5)

// alert(algoritimoComplejo);

// Tipo de dato String
var x = "Hola " + "mundo"
// alert(x)

// var nombre = prompt("Dime como te llamas")
// alert("Hola " + nombre)


// var numeroUnoString = prompt("Dame un numero")
// var numeroDosString = prompt("Dame otro numero")

// var numeroUnoNumber = parseInt(numeroUnoString)
// var numeroDosNumber = parseInt(numeroDosString)

// var total = numeroUnoNumber + numeroDosNumber

// alert("La suma de los numeros son: " + total)

// Tipo de dato booleano
var boolean = true
var booleanDos = false

// Comparaciones
// var edadString = prompt('Dime que edad tienes');
// alert(edad == 18)
// alert(edad > 20)
// alert(edad < 21)

// var edad = parseInt(edadString)
// // Condicional
// if (edad > 18) {
//     alert('Puede comprar una chela 🤮')
// } else if(edad == 15) {
//     alert('Solo una chela 🤠')
// } else {
//     alert('No puedes tomar nada 👾')
// }

// Hacer la logica de un semaforo
//  Validar VERDE AMARILLO O ROJO

// var statusSemaforo = prompt('En que color esta el semaforo')


// if (statusSemaforoFix == "VERDE") {
//     alert('Avanza 🏎')
// } else if (statusSemaforoFix == "AMARILLO") {
//     alert('Pasa rapido 🏎💨')
// } else if (statusSemaforoFix == "ROJO") {
//     alert('Detente 🚫')
// } else {
//     alert('Haz lo que quieras')
// }

// Escriba un programa que pida dos números enteros y que calcule su división, escribiendo si la división es exacta o no.

var numeroUnoString = prompt('Dame un numero')
var numeroDosString = prompt('Dame un numero')

var numeroUno = parseInt(numeroUnoString)
var numeroDos = parseInt(numeroDosString)

// var residuo = numeroUno % numeroDos

// if (residuo == 0) {
//     alert('La división es exacta')
// } else {
//     alert('La división NO es exacta')
// }

if (numeroUno == numeroDos) {
    alert('Numero iguales')
} else if (numeroUno > numeroDos) {
    alert('Numero UNO es mayor ' + numeroUno)
} else if (numeroDos > numeroUno) {
    alert('Numero DOS es mayor ' + numeroDos)
} else {
    alert('Dato no valido')
}

