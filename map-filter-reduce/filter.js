const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function verificaPar(array){
    return array.filter((array) => array % 2 === 0)
}

console.log(verificaPar(numeros))