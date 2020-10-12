const fs = require('fs')

fs.readFile('datos.json', (err, data) =>{
    if(err){
        console.log(err);
    }else{
        let datar = JSON.parse(data)
        console.log(datar)
    }
})