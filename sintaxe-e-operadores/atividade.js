// Crie uma função que receba dois números como parâmetros.
// Confira se os números são guais
// Confira se a soma dos números é maior que 10 ou menor que 20
// Retorne uma String dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20"

const resposta = (num1, num2) => {
    if(num1 === String(num1) || num2 !== Number(num2)) return "Insira 2 números"

    let igual = (num1 === num2) ? "são" : "não são";
    let soma = num1 + num2;
    let maior10 = (soma > 10) ? "maior" : "menor";
    let maior20 = (soma > 20) ? "maior" : "menor";

    return `Os números ${num1} e ${num2} ${igual} iguais. Sua soma é ${soma}, que é ${maior10} que 10 e ${maior20} que 20`;
}

console.log(resposta(1,2))
console.log(resposta("B", "3"))
console.log(resposta(15, 15))
console.log(resposta("1", "3"))
console.log(resposta("2", 1))
console.log(resposta(1, "2"))