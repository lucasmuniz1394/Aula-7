
function buscalinear(ValorBuscado, ListaDeElementos) {
    for(i = 0; i <ListaDeElementos.length; i++){
        if(ListaDeElementos[i] === ValorBuscado){
            return i;
        }
    }
    console.log("não encontrou o elemento")
}

console.log(buscalinear(11,[1,2,3,4,5,6,8,]))