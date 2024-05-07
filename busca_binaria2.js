

function BuscaBinaria(ValorBuscado,ListaDeValores) {
   
    let inicio = 0;
    let fim = ListaDeValores.length - 1;
    
    while (inicio <= fim ) {
        let meio = Math.floor((inicio + fim) / 2);
          
        if (ListaDeValores[meio] === ValorBuscado) {
            return meio; 
        }
         else if (ValorBuscado <= ListaDeValores[meio]){
             fim = meio;
        }    
        else {
            inicio = meio;
        }
        return - 1;
    }


}
console.log(buscaBinaria(1, [1,2,3,4,5,6]));