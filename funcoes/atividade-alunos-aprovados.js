//1. Cire uma função que recebe o array alunos e um número que irá apresentar a média final
//2. percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a média final;
//3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno

const alunos = [{
    nome: "João",
    nota: 5,
    turma: '1B'
},
{
    nome: "Sofia",
    nota: 9,
    turma: "1B"
},
{
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
},
{
    nome: 'Miguel',
    nota: 3,
    turma: '2C'
}

];

function alunosAprovados (arr, media) {
    let aprovados = []
    for(let i = 0;  i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5))