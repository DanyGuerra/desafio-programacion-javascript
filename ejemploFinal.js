function naipes(tipo){
    let resultado = [];
    
    for(let i = 1; i<13; i++){
        if(i==8||i==9){
        
        }else{
            resultado.push(i + ' de ' + tipo);
        }
    }

    return resultado;
}

console.log(naipes('espadas'));
