const array = [1, 2, 3, 4, 5]

function somaNumeros(array) {
    return array.reduce((prev, current) => prev + current)
}

console.log(somaNumeros(array))

const lista = [
    {
        name: 'banana',
        preco: 5
    },
    {
        name: 'maca',
        preco: 6
    },
    {
        name: 'abacaxi',
        preco: 10
    }
];

const saldo = 100

function calculaSaldo(saldo, lista) {
    return lista.reduce((accumulator, currentValue) => {
        return accumulator - currentValue.preco
    }, saldo)
}

console.log(calculaSaldo(saldo, lista))