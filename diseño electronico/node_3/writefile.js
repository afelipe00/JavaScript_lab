const fs = require('fs')

var payload = {
    name: "juan",
    surname: "lopes",
    yr: 37 
}

var array = [];

for (var i = 0; i < 10 ; i++){
    payload.yr += 1
    //array.push(JSON.parse(JSON.stringify(payload))); //metodo 1
    array.push(Object.assign({},payload));//metodo 2: este funciona solo cuando no hay subobjetos en el objeto que vamos a copiar.
}

var texto = JSON.stringify(array);

//console.log(array)
//console.log(texto)

fs.writeFileSync('datos.json',texto)


