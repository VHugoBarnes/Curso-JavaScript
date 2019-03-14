//HERENCIA PROTOTIPAL
// function heredaDe(prototipoHijo, prototipoPadre){
//     var fn = function(){}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn()
// }
/////////////////////////////////////////////////////////////////////////////////////////

class Persona {

    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido,altura){
        super(nombre, apellido,altura)
    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if(fn){
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)

    if(esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

 var victor = new Persona('Víctor', 'Vázquez',1.7)
 var keko = new Persona('Keko', 'Kaka', 1.9)
 var reba = new Desarrollador('Reba', 'Meyers', 1.6)

 victor.saludar()
 keko.saludar(responderSaludo)
 reba.saludar(responderSaludo)