

function buscaBinaria(lista, elemento) {
   
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (lista[meio] === elemento) {
            return meio; 
        } else if (lista[meio] < elemento) {
            inicio = meio + 1; 
        } else {
            fim = meio - 1; 
        }
    }

    return -1; 
}


const minhaLista = [1,2, 3, 4, 5,6, 7,8, 9, 10, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,
34,35,36,37,38,39,40,41,42,43,44,45,46,47];
const elementoProcurado = 6;
const indice = buscaBinaria(minhaLista, elementoProcurado);

console.log(`O elemento ${elementoProcurado} ${indice !== -1 ? `foi encontrado no índice ${indice}.`
 : `não foi encontrado na lista.`}`);
