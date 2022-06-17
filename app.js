var express = require('express');
const calcData = require('./calcularData');
const calcValor = require('./calcValor');
const verificarBarra = require('./verificarBoleto');
const digits = require('./verificarDigitos');
const compor = require('./comporBarra')



const app = express()
app.use(express.json());

app.get('/:linhadigitavel',(req,res) =>{
    const linhaDigitavel = req.params.linhadigitavel
    if(linhaDigitavel.length==47){
    const barCode = compor.comporBarra(linhaDigitavel)

    const fatorData = Number(barCode.substring(5,9))
    const fatorValor = barCode.substring(9,19)

    const expirationDate = calcData(fatorData)
    const amount = calcValor(fatorValor)

    if(!digits.verificarDigitos(linhaDigitavel)){
        return res.json({message:'Boleto inválido'})
    }

    if(!verificarBarra.verificarBarra(barCode)){
        return res.json({message:'Boleto inválido'})
    }

    return res.status(200).json({barCode,amount,expirationDate})
    }
    else if(linhaDigitavel.length == 48){
        const barCode = compor.comporBarra48(linhaDigitavel)

        const fatorValor = barCode.substring(4,15)

        const amount = calcValor(fatorValor)

        if(!digits.verificarDigitos48(linhaDigitavel)){
            return res.json({message:'Boleto inválido'})
        }
        if(!verificarBarra.verificarBarra48(barCode)){
            return res.json({message:'Boleto inválido'})
        }
        return res.json({amount,barCode})
    }
})  


app.listen(9843, ()=> console.log('oi'))