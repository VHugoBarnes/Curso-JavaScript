//HERENCIA PROTOTIPAL
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn()
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() { 
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

heredaDe(Desarrollador, Persona)

// var victor = new Persona('Víctor', 'Vázquez',1.7)
// victor.saludar()