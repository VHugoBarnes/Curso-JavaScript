var contador = 0

var llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())

var frec =  contador === 1 ? 'vez' : 'veces'

console.log(`Fuí a ver si llovía ${contador} ${frec}`)