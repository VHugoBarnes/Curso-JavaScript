var victor = {
    nombre: 'Víctor',
    apellido: 'Vázquez',
    edad: 19
}

var reba = {
    nombre:'Reba',
    edad: 3
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad =  ( {edad} ) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ( {edad} ) => !esMayorDeEdad( {edad} )


function mayorDeEdad(persona){
    //Víctor es mayor de edad
    //Víctor es menor de edad

    if(esMayorDeEdad(persona)){ 
        console.log(`${persona.nombre} es mayor de edad `)
    }else if(persona.edad < 18 && persona.edad > 0){
        console.log(`${persona.nombre} es menor de edad`)
    }else{
        console.log(`${persona.nombre} aún no ha nacido ☹`)
    }
}

function permitirAcceso(persona){
    if(esMenorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

const _permitirAcceso = ( {edad} ) => esMenorDeEdad({edad}) ? console.log('ACCESO DENEGADO') : console.log('ACCESO CONCEDIDO')
