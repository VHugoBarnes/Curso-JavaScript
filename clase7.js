const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`

//CrossDomain
const OPTS ={ crossDomain:true }

const onPeopleResponse = function(persona){
    console.log(`Hola, yo soy  ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,OPTS, onPeopleResponse)
}

obtenerPersonaje(19)
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
