const express =  require("express")
const router = express.Router()
var md5 = require('md5');
const fs = require('fs')



//declaracion de variables
let tempArray = [];
let arrayUsers = [];

//se cargan los datos
loadData();

function loadData(){
    fs.readFile('datos.json', (err, data) =>{
        if(err){
            console.log(err);
        }else{
            arrayUsers = JSON.parse(data)
            console.log(datar)
        }
    })
}

//ws de saludo GET
router.get('/saludo/:nombre/:apellido', (req,res, next) => {
    console.log('hicieron un req a saludo');
    var payload = {
        'id': 1,
        'mensaje' : 'Hola ' + req.params.nombre + ' ' + req.params.apellido + ' bienvenido a saludo'
    }
    res.send(payload);
})

//ws de hora GET
router.get('/hora', (req,res, next)=>{
    console.log('hicieron req a hora');
    let payload = {
        'id': 2,
        'hora': getDatetime()
    }
    res.send(payload)
})

//ws de recibir temperatura GET
router.get('/temperaturaIn/:temp', (req,res, next)=>{
    console.log('Req. de temperatura');
    console.log(req.params)
    let t = req.params.temp
    let idCont = 0;
    let message;
    let payload = {
        id: idCont,
        temp: Number(t),
        date: getDatetime()
    }
    try{
        tempArray.push(Object.assign({},payload))
        message = 'dato almacenado correctamente'
    } catch(error){
        message = error;
    }
    res.send(message)
})


//ws de transmitir temparray GET
router.get('/temperaturaOut', (req, res, next)=>{
    console.log('solicitud de array')
    res.send(tempArray);
})

//ws de borrar array GET
router.get('/temperaturaDel', (req, res, next)=>{
    console.log('!!ARRAY DELETE!!')
    try{
        tempArray = []
        res.send('Arreglo Borrado');
    }catch(error){
        res.send(error);
    }
})

//ws tipo post
router.post('/placa',(req,res,next)=>{
    
    console.log(req.body)
    var payload = {
        mensaje: 'OK'
    }
    res.send(payload)
});

//ws usuario y contrasenna 
router.post('/usuarioIn',(req,res,next)=>{
    var dataUsers = {
        user: req.body.user,
        password: md5(req.body.password)
    };
    let payload = {
        message: 'undefined'
    }
    if (findUser(dataUsers.user)){
        user = findUser(dataUsers.user);
        if (user.password == dataUsers.password){
            payload.message = 'Bienvenido'
        }else{
            payload.message = 'contrasenna incorrecta'
        }
    }else{
        payload.message = 'usuario no existente'
    }
    res.send(payload)
})
//funcion para encontrar usuario
function findUser(user){
    for(dataUser of arrayUsers){
        if(dataUser.user === user){
            return dataUser
        }
    }
    return undefined
}

//ws registrar usuario
router.post('/userReg', (req, res,next) =>{
    var dataUser = {
        name: req.body.name,
        username: req.body.username,
        country: req.body.country,
        password: req.body.password,
        email: req.body.email
    }
    var payload = {
        message: 'usuario ingresado correctamente'
    }
    arrayUsers.push(JSON.parse(JSON.stringify(dataUser)))
})

//ws eliminar usario
router.post('/userDel', (req,res,next) =>{
    var dataUsers = {
        user: req.body.user,
        password: md5(req.body.password)
    };
    let payload = {
        message: 'undefined'
    }
    if (findUser(dataUsers.user)){
        user = findUser(dataUsers.user);
        if (user.password == dataUsers.password){
            for(var i = 0 ; i < arrayUsers.length ; i++){
                if (arrayUsers[i].user === user){
                    arrayUsers.splice(i,1)
                }
            }
            payload.message = 'usuario eliminado'
        }else{
            payload.message = 'contrasenna incorrecta'
        }
    }else{
        payload.message = 'usuario no existente'
    }
    res.send(payload)
})
//funcion para obtener la fecha altual. 
function getDatetime(){
    let date = new Date();
    return date;
}

//modulo de exportacion a index
module.exports = router;