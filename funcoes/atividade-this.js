//Dada a função calculaIdade, utilize os métodos call e apply para verificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carla",
    idade: 26
}

const animal = {
    nome: "Nina",
    idade: 6
}

console.log(calculaIdade(pessoa2)) //está retornando o tipo de pessoa2 que é object
console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.apply(pessoa1, [10])) //apply precisa dos colchetes