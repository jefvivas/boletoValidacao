function verificarBarra(barra){
    let vetorBarra = []

    for ( let i = 0;i<barra.length;i++){
        vetorBarra[i] = Number(barra[i])
    }
    
    for ( let i = barra.length-1; i>=5;i--){
        if(i%8==3){
            vetorBarra[i]*= 2
        }
        else if(i%8==2){
            vetorBarra[i] *= 3
        }
        else if(i%8==1){
            vetorBarra[i] *= 4
        }
        else if(i%8 == 0){
            vetorBarra[i] *= 5
        }
        else if ( i%8 == 7){
            vetorBarra[i] *= 6
        }
        else if ( i%8 == 6){
            vetorBarra[i] *= 7
        }
        else if( i%8 == 5){
            vetorBarra[i] *= 8
        }
        else{
            vetorBarra[i] *= 9
        }
    }
    
    for ( let i = 3; i>=0;i--){
        if(i%8 == 3){
            vetorBarra[i] *= 9
        }
        else if(i%8 == 2){
            vetorBarra[i] *= 2
        }
        else if(i%8 == 1){
            vetorBarra[i] *= 3
        }
        else{
            vetorBarra[i] *= 4
        }
    }
    
    var somaDigito = vetorBarra.reduce((t,n)=>t+n,0) - vetorBarra[4]
    
    var digitoVerificador = 11-(somaDigito%11)
    if(digitoVerificador == 0 || digitoVerificador == 10 || digitoVerificador == 11) digitoVerificador= 1
    
    if(digitoVerificador != barra[4]){
        return false
    }
    return true



}

function verificarBarra48(barra){
    let vetorBarra = []
    for(let i = 0;i<3;i++){
        if(i%2==0){
            vetorBarra[i] = barra*2>9?((Number(barra[i]) * 2) % 10) + parseInt(Number((barra[i] * 2) / 10)):barra[i]*2
        }
        else{
            vetorBarra[i] = Number(barra[i])
        }
    }

    for(let i = 3;i < barra.length;i++){
        if(i%2==1){
            vetorBarra[i] = barra*2>9?((Number(barra[i]) * 2) % 10) + parseInt(Number((barra[i] * 2) / 10)):barra[i]*2
        }
        else{
            vetorBarra[i] = Number(barra[i])
        }
    }

    var somaDigito = vetorBarra.reduce((t,n)=>t+n,0) - vetorBarra[3]
    var digitoVerificador = 10-(somaDigito%10)


    if(digitoVerificador!=barra[3]) return false
    return true

}


module.exports = {verificarBarra,verificarBarra48}