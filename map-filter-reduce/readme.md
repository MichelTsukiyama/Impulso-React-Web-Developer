# Map

- Cria um novo array;
- Não modifica o array original;
- Realiza as operações em ordem em cada item do array.

## Sintaxe

    array.map(callback, thisArg)

    callback(item, index, array)

**callback** função a ser executada em cada elemento;
**thisArg (opcional)**  valor de 'this' dentro da função callback.

## Map vs forEach

    //usando map

    const array = [1, 2, 3, 4, 5];
    array.map((item) => item * 2);

    //retorno: [2, 4, 6, 8, 10]

    //Usando forEach

    const array = [1, 2, 3, 4, 5];
    array.forEach((item) => item * 2); 

    //retorno: undefined

Obs. usando forEach, teria usar uma variável para armazenar o resultado do forEach e ele ser exibido.

----

# Filter

- Cria um novo array;
- Não modifica o array original;
- Retorna uma nova lista apenas com os itens que passaram pelo filtro.


## Sintaxe

Igual ao Map:

    array.filter(callback, thisArgs)

Exemplo: 

    const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

    frutas.filter((fruta) => fruta.includes('maçã))

    //retorna: ['maça fuji', 'maçã verde'];

----

## Reduce

Executa uma função em todos os elementos do array, retornando um valor único.

Possui a mesma sintaxe que map e filter, substituindo apenas o parâmetro "thisArgs":

    array.reduce(callbackFn, initialValue)

**callbackFn**: função a ser executada a partir do acumulador;
**initialValue**: valor sobre o qual o retorno final irá atuar.

Exemplo:

    const callbackFn = function (accumulator, currentValue, index, array) {
        //do something
    }

    array.reduce(callbackFn, initialValue)

**Accumulator/prevValue** : acumulador de todas as chamadas de callbackFn;
**currentValue**: Elemento atual sendo acessado pela função