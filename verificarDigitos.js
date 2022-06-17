function verificarDigitos(linhaDigitavel){

var bloco1 = []
var bloco2 = []
var bloco3 = []

for(let i = 0; i<=8;i++){
    if(i%2==0){
        bloco1[i] = Number(linhaDigitavel[i]) * 2 > 9
        ? ((Number(linhaDigitavel[i]) * 2) % 10) + parseInt(Number((linhaDigitavel[i] * 2) / 10))
        : Number(linhaDigitavel[i] * 2);
    }
    else{
        bloco1[i] = Number(linhaDigitavel[i]);
    }
}


for(let i = 0; i<=9;i++){
    if(i%2==0){
        bloco2[i] = Number(linhaDigitavel[i+10]);
    }
    else{
        bloco2[i] = Number(linhaDigitavel[i+10]) * 2 > 9
        ? ((Number(linhaDigitavel[i+10]) * 2) % 10) + parseInt(Number((linhaDigitavel[i+10] * 2) / 10))
        : Number(linhaDigitavel[i+10] * 2);
    }
}

for(let i = 0; i<=9;i++){
    if(i%2==0){
        bloco3[i] = Number(linhaDigitavel[i+21]);
    }
    else{
        bloco3[i] = Number(linhaDigitavel[i+21]) * 2 > 9
        ? ((Number(linhaDigitavel[i+21]) * 2) % 10) + parseInt(Number((linhaDigitavel[i+21] * 2) / 10))
        : Number(linhaDigitavel[i+21] * 2);
    }
}


var digitoBloco1 = 10 - bloco1.reduce((t,n)=>t+n,0)%10
var digitoBloco2 = 10 - bloco2.reduce((t,n)=>t+n,0)%10
var digitoBloco3 = 10 - bloco3.reduce((t,n)=>t+n,0)%10

if(digitoBloco1 != linhaDigitavel[9]) return false

if(digitoBloco2 != linhaDigitavel[20]) return false

if(digitoBloco3 == linhaDigitavel[31]) return true

}

const verificarDigitos48 =(linhaDigitavel) =>{
    var bloco1 = []
    var bloco2 = []
    var bloco3 = []
    var bloco4 = []

    for( let i = 0;i<11;i++){
        if(i%2==0){
            bloco1[i] = Number(linhaDigitavel[i]) * 2 >= 10
            ? ((Number(linhaDigitavel[i]) * 2) % 10) + parseInt(Number((linhaDigitavel[i] * 2) / 10))
            : Number(linhaDigitavel[i] * 2);
        }
        else{
            bloco1[i] = Number(linhaDigitavel[i]);
        }
    }
    for( let i = 0;i<11;i++){
        if(i%2==0){
            bloco2[i] = Number(linhaDigitavel[i+12]) * 2 >= 10
            ? ((Number(linhaDigitavel[i+12]) * 2) % 10) + parseInt(Number((linhaDigitavel[i+12] * 2) / 10))
            : Number(linhaDigitavel[i+12] * 2);
        }
        else{
            bloco2[i] = Number(linhaDigitavel[i+12]);
        }
    }
    for( let i = 0;i<11;i++){
        if(i%2==0){
            bloco3[i] = Number(linhaDigitavel[i+24]) * 2 >= 10
            ? ((Number(linhaDigitavel[i+24]) * 2) % 10) + parseInt(Number((linhaDigitavel[i+24] * 2) / 10))
            : Number(linhaDigitavel[i+24] * 2);
        }
        else{
            bloco3[i] = Number(linhaDigitavel[i+24]);
        }
    }
    for( let i = 0;i<11;i++){
        if(i%2==0){
            bloco4[i] = Number(linhaDigitavel[i+36]) * 2 >= 10
            ? ((Number(linhaDigitavel[i+36]) * 2) % 10) + parseInt(Number((linhaDigitavel[i+36] * 2) / 10))
            : Number(linhaDigitavel[i+36] * 2);
        }
        else{
            bloco4[i] = Number(linhaDigitavel[i+36]);
        }
    }
    var digitoBloco1 = 10 - bloco1.reduce((t,n)=>t+n,0)%10
    var digitoBloco2 = 10 - bloco2.reduce((t,n)=>t+n,0)%10
    var digitoBloco3 = 10 - bloco3.reduce((t,n)=>t+n,0)%10
    var digitoBloco4 = 10 - bloco4.reduce((t,n)=>t+n,0)%10

    if(digitoBloco1 != linhaDigitavel[11]) return false

    if(digitoBloco2 != linhaDigitavel[23]) return false

    if(digitoBloco3 != linhaDigitavel[35]) return false

    if(digitoBloco4 == linhaDigitavel[47]) return true

}

module.exports = {verificarDigitos,verificarDigitos48}