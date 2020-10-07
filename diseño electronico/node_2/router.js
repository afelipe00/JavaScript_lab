const express =  require("express")
const router = express.Router()


router.get('/saludo', (re,res, next) => {
    console.log('hicieron un res a saludo')
    res.send('esta es la respuesta de saludo')

})

module.exports = router;