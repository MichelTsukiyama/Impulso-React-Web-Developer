//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

let numeros = [1, 3, 4, 6, 80, 33, 23, 90]

const VERIFICAR_NUM_PAR = (vetor) => {
    if(!vetor) return -1
    if(!vetor.length) return -1

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 === 0){
        vetor[i] = 0
            
        }
    }

    return vetor
}

console.log(VERIFICAR_NUM_PAR(numeros))
console.log(VERIFICAR_NUM_PAR(""))
console.log(VERIFICAR_NUM_PAR(null))   


