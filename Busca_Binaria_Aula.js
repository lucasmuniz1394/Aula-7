// Define a função buscaBinaria com os parâmetros valorBuscado e ListaDeValores, o primeiro é o valor buscado o segundo a lista.
function buscaBinaria(valorBuscado, ListaDeValores){

    // Aqui criamos duas "variáveis" que vão armazenar o índice do começo e do fim da listaDeValores.
    let inicio = 0, fim = ListaDeValores.length - 1;

    // Vai rodar um loop até sobrar um único elemento no array(retorna o valorBuscado se achar ele, casó contrario retorna -1)
    while(inicio <= fim){
        // Toda vez que o while rodar vai recriar o meio que será o índice do centro do listaDeValores.
        let meio = Math.floor((inicio + fim) / 2);

        // Retorna o valor do meio caso encontrar o valorBuscado.
        if(ListaDeValores[meio] === valorBuscado){
            return meio;
        }
        // Elimina a parte maior do array caso o valor buscado seja menor que o meio.
        else if(valorBuscado <= ListaDeValores[meio]){
            fim = meio;
        }
        // Elimina a parte menor do array caso o valor buscado seja maior que o meio.
        else {
            inicio = meio;
        }

        // Retorna -1 caso não encontrar o valorBuscado dentro da Lista.
        return - 1;
    }
}

//Executa e imprime a função buscaBinaria com os argumentos passados abaixo:
console.log(buscaBinaria(8, [1,2,3,4,5,6,7,8]));