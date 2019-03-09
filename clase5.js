var victor = {
    nombre: 'Víctor',
    apellido: 'Vázquez',
    altura: 1.73,
    cantidadDeLibros: 70
}

var karen = {
    nombre: 'Karen',
    apellido: 'Vázquez',
    altura: 1.68,
    cantidadDeLibros: 98
}

var nicole = {
    nombre: 'Nicole',
    apellido: 'Rodríguez',
    altura: 1.67,
    cantidadDeLibros: 80
}

var rosa = {
    nombre: 'Rosa María',
    apellido: 'Gómez',
    altura: 1.64,
    cantidadDeLibros: 120
}

var abigail = {
    nombre: 'Abigail',
    apellido: 'Ramirez',
    altura: 1.70,
    cantidadDeLibros: 200
}

const esAlta =  persona =>  persona.altura >= 1.7
const esBaja = persona => persona.altura <= 1.7

var personas = [victor, karen, nicole, rosa, abigail]

//Esta función filtra con una condición dada.
var personasAltas = personas.filter(esAlta)


const pasarAlturaACms = persona => {
    
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)

// var acum = 0

// for(var i=0; i < personas.length; i++){
//     acum += personas[i].cantidadDeLibros
// }
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)