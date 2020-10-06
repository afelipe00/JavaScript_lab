/*
var fs = require('fs');


fs.readFile('package.json', function(err, data){
    if (err){
        return console.log('error al leer el archivo')
    }
    console.log(data.toString())
})

console.log("Hola desde javascript, nodeJS");

var a = 10;

for(var i = 0 ; i <10; i++) {
    console.log("el valor de i es:" + i)
}
*/

const axios = require('axios')

axios.get('https://api.openbrewerydb.org/breweries')
    .then(response => {
        let datos = response.data
        let payload = {
            "nombre:": "Felipe diaz",
            "Facultad": "ingenieria",
            "edad": 23,
            "estado": datos[10].state
        }
        console.log(datos)
        console.log(payload)
    })
    .catch(error => {
        console.log(error)
    })
