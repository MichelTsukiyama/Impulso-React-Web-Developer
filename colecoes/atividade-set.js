//Dado o array [30, 30, 40, 5, 223, 2049, 33034, 5], retorne outro array apenas com valores únicos.

const myArray = [30, 30, 40, 5, 223, 2049, 33034, 5]

function valoresUnicos(array) {
    const mySet = new Set(array)

    return[...mySet]
}

console.log(valoresUnicos(myArray))