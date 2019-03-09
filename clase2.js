var victor = {
    nombre: 'Víctor',
    apellido: 'Vázquez',
    edad: 19,
    peso: 55,
}

console.log(`Al inicio del año ${victor.nombre} pesa ${victor.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365
const META = victor.peso - 3

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while(victor.peso > META){
    
    if(comeMucho()){
        //aumentar de peso
        aumentarPeso(victor)
    }
    if(realizaDeporte()){
        //adelgazar
        adelgazar(victor)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${victor.nombre} adelgazó 3kg`)
