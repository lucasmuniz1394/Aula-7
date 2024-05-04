const array = [1,2,3,4,5,6,7,8,9,10];
const elementoProcurado = 8;
let encontrado = false;
let indice = -1;

for (let i = 0; i < array.length; i++) 
    if (array[i] === elementoProcurado){
        encontrado = true;
        indice = i;
        break;
}

console.log(`O elemento ${elementoProcurado} ${encontrado ? `foi encontrado no índice ${indice}.` : `não foi encontrado na lista.`}`);
