const express =  require("express")
const router = express.Router()

router.get('/saludo/:nombre/:apellido', (req,res, next) => {
    console.log('hicieron un req a saludo');
    var payload = {
        'id': 1,
        'mensaje' : 'Hola ' + req.params.nombre + ' ' + req.params.apellido + ' bienvenido a saludo'
    }
    res.send(payload);
})

router.get('/hora', (req,res, next)=>{
    console.log('hicieron req a hora');
    let payload = {
        'id': 2,
        'hora': getDatetime()
    }
    res.send(payload)
})

router.get('/temperatura/:temp', (req,res, next)=>{
    console.log('hicieron req a temperatura');
    console.log(req.params)
    let payload = {
        'id': 3,
        'temperatura state': 'temperatura ok' 
    }
    res.send(payload)
})

function getDatetime(){
    let date = new Date();
    return date;
}

module.exports = router;