function comporBarra(linhaDigitavel){


const barra = linhaDigitavel.substring(0,4) + linhaDigitavel.substring(32,48) + linhaDigitavel.substring(4,9) + linhaDigitavel.substring(10,16) +
linhaDigitavel.substring(16,20) + linhaDigitavel.substring(21,31)

return barra
}

function comporBarra48(linhaDigitavel){
    var barra = linhaDigitavel.substring(0,11)+ linhaDigitavel.substring(12,23) + linhaDigitavel.substring(24,35) + linhaDigitavel.substring(36,47)
    return barra
}

module.exports = {comporBarra,comporBarra48}