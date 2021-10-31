// Verifique de duas maneiras diferentes entre si, se uma String é um palíndromo
// palíndromo: frase ou palavra que se pode AudioListener, indiferentemente, da esquerda para a direita ou vice-versa
// usar somemnte uma palavra
let verificaPalindromo1 = (palavra) => {
    if (!palavra || palavra === Number(palavra)) return "Digite uma palavra"

    let palavraInversa = ""

    for (let i = palavra.length - 1; i >= 0 ; i-- ){
        palavraInversa += palavra[i]   
    }
    return (palavra === palavraInversa) ? true : false
}

console.log(verificaPalindromo1("carro"))
console.log(verificaPalindromo1("raiar"))
console.log(verificaPalindromo1(""))
console.log(verificaPalindromo1(1))

console.log(" 2ª solução")

let verificarPalindromo2 = (palavra) => {
    if (!palavra || palavra === Number(palavra)) return "Digite uma palavra"

    return palavra.split("").reverse().join("") === palavra
}

console.log(verificaPalindromo1("carro"))
console.log(verificaPalindromo1("raiar"))
console.log(verificaPalindromo1(""))
console.log(verificaPalindromo1(1))
