const express =  require("express")
const router = express.Router()

//declaracion de variables
let tempArray = [];

//ws de saludo
router.get('/saludo/:nombre/:apellido', (req,res, next) => {
    console.log('hicieron un req a saludo');
    var payload = {
        'id': 1,
        'mensaje' : 'Hola ' + req.params.nombre + ' ' + req.params.apellido + ' bienvenido a saludo'
    }
    res.send(payload);
})

//ws de hora
router.get('/hora', (req,res, next)=>{
    console.log('hicieron req a hora');
    let payload = {
        'id': 2,
        'hora': getDatetime()
    }
    res.send(payload)
})

//ws de recivir temperatura
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
        tempArray.push(payload)
        message = 'dato almacenado correctamente'
    } catch(error){
        message = error;
    }
    res.send(message)
})


//ws de transmitir temparray
router.get('/temperaturaOut', (req, res, next)=>{
    console.log('solicitud de array')
    res.send(tempArray);
})

//ws de borrar array
router.get('/temperaturaDel', (req, res, next)=>{
    console.log('!!ARRAY DELETE!!')
    try{
        tempArray = []
        res.send('Arreglo Borrado');
    }catch(error){
        res.send(error);
    }
})

//funcion para obtener la fecha altual.
function getDatetime(){
    let date = new Date();
    return date;
}

//modulo de exportacion a index
module.exports = router;