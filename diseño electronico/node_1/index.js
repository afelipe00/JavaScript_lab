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
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
