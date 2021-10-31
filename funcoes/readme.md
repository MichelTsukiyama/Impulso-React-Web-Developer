# Funções

## Estrutura

Definação comun de uma função:

*function* **nome** (parametros) {
    //instruções
}

Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

Quando invocamos "return", a função para de ser executada

*function* **nome** (parametros) {
    //instruções
    **return** //valore de retorno
}


## Função anônima

Funções que representem expressões
Não tem nome

*const* **soma** = *function* (a, b){
    return a + b
}

soma(1, 2) 
// 3

Uma variável pode armazenar uma função

## Função autoinvocável (IIFE*)
*Immediately Invoked Function Expression

Uma função anônima entre parenteses, seguido por outro par de parenteses, que representa sua chamada.

(
    *function*(){
        *let* **name** = "Digital Innovation One"
        **return** **name**;
    }
)();

//Digital Innovation One

Também pode ser utilizada com parâmetros ou armazenada em uma variável

*const* **soma3** = (
    *function*(a, b){
        **return** a + b;
    }
)(1, 2);

console.log(soma3)
//3

## Callbacks

Uma função passada como argumento para outra.

*const* **calc** = *function*(operacao, num1, num2){
    **return** operacao(num1, num2)
}

*const* **soma** = *function*(num1, num2){
    **return** num1 + num2
}

*const* **sub** = *function*(num1, num2){
    **return** num1 - num2
}

*const* **resultSoma** = **calc**(**soma**(1, 2))
*const* **resultSub** = **calc**(**sub**(1, 2))

console.log(**resultSoma**)
console.log(**resultSub**)

Utilizando callbacks, você tem maior controle da ordem de chamadas

--------------------------------------------

# Parâmetros

## Valores padrão

*function* **exponencial** (array, num = 1) {
    *const* **result** = [];
    *for*(*let* i = 0; i < array.length; i ++){
    **result**.push(array[i] ** num)
    }
    **return** **result**;
}

**exponencial**([1, 2, 3, 4])
//1, 2, 3, 4
**exponencial**([1, 2, 3, 4], 4)
//1, 8, 27, 64

- note que "num =1", significa que se não for passado um parâmentro num será 1;

## Objeto "arguments"

*function* **findMax**() {
*let* **max** = - Infinity;
    *for*(*let* i = 0; i < **arguments**.length; i++){
        if(**arguments**[i] > max){
            max = **arguments**[i];
        }
    }
    **return** **max** 
}

findMax(1, 2, 3, 6, 90, 1)
//90

Um array com todos os parâmetros passados quando a funcção foi invocada

*function* **ShowArgs**(){  *note que o ( ) não possui argumentos 
    **return** **arguments**
}

------

## Arrays

**Spread**: Uma forma de lidar separadamente com elementos (quando está chamando a função).

*function* **sum**(x, y, z){
    **return** x + y + z;
}

*const* **numbers** = [1, 2, 3];

console.log(**sum**(**...numbers**));


O que era parte de um array se torna um elemento independente (os "..." separam os valores do array)

**Rest**: combina os argumentos em um array (usa quando está declarando a função).

*function* **confereTamanho**(...args) {
    console.log(args.length)
}

**confereTamanho**() // 0
**confereTamanho**(1, 2) // 2
**confereTamanho**(3, 4, 5) // 3

O que era um elemento independente se torna parte de um array (foi usado como o contrário do Spread, para unir os argumentos em um array)

------

## Objetos

**Object Destructuring**

*const* **user** = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

*function* **userId** ({id}){
    **return** id;
}

*function* **getFullName**({fullName: {firstName: first, lastName: last}}){
    **return** \`\${first} ${last}\`
}

**userId**(**user**)
//42
**getFullName**(**user**)
// John Doe

Entre chaves {} podemos filtrar apenas os dados que nos interessam em um objeto.

-----

# Loops 

## if / else

Estrutura

*if* (**condição**) {
    **declaração1**
} *else* {
    **declaração2**
}

Condição: avalia se o resultado é true ou false ex.: num < 0
Declaração1: Ocorre caso a condição seja verdadeira
Declaração2: Ocorre caso a condição seja falsa

**É uma boa prática colocar condições em variáveis**
**É uma boa prática evitar criar variáveis para o *else* e usar *return*, evitando reservar espaço da memória desnecessáriamente. Ex.:**

- [x] *function* **numerPositivo(num) {
    *const* ehNegativo = num < 0;
    *if*(**ehNegativo**){
        **return** false;
    }
    **return** true;
}

- [ ] *function* **numerPositivo(num) {
    *let* **resultado**;
    *const* ehNegativo = num < 0;
    *if*(**ehNegativo**){
        **resultado** =  false;
    } *else* {
        **resultado** = true;
    }
    **return** **resultado**;
}

Também é possível passar por várias condições (encadeadas) usando a estrutura:

    if(condição1){

        } else if (condição2) {
            
        } else if (condição3){
            
        } ... (condiçãoN){
               
        } else {
        }
            
    }

## Switch/case

- Equivale a uma comparação de tipo e valor (====);
- Sempre precisa de um valor "default";
- Ideal para quando se precisa comparar muitos valores.

Estrutura:

    switch(id){
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return: "peixe";

    }  

    id = 1 // cão
    id = 3 // pássaro
    id = 4 // peixe (default)
    id = "1" // peixe (default)

## for

Loop dentro de elemtnos iteráveis (arrays, strings).

Estrutura 
    
    for( inicialização do índice; condição; incremento/decremento){
        bloco
    }

    for(let i = 0; i < exemplo.length; i++) {
        bloco
    }

## for...in

Loop entre propriedade enumeráveis de um objeto

Estrutura

    for(propriedade in objeto){
        console.log(propriedade)
    }

Exemplo 1: 

    function forInExemplo(obj) {
        for(propriedade in obj){
            console.log(propriedade)
        }
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }

    forInExemplo(meuObjeto);
    //nome
    //idade
    //cidade

Exemplo 2:

    function forInExemplo(obj) {
        for(prop in obj){
            console.log(obj[prop])
        }
    }

    const meuObjeto = {
        nome: "João",
        idade: "20",
        cidade: "Salvador"
    }

    forInExemplo(meuObjeto);
    //João
    //20
    //Salvador

## for...of

Loop entre estruturas iteráveis (arrays, strings)

Estrutura:
        
    for(propriedade of objeto){
        console.log(propriedade)
    }

Exemplo:

    function logNumeros(nums) {
        for(num of nums){
            console.log(num)
        }
    }

    const nums = [30, 20, 233, 2]

    logNumeros(nums)

    //30
    //20
    //233
    //2

## while

Executa instruções até que a condição se torne falsa.

Exemplo: 

    let num = 0

    while(num <= 5) {
        console.log(num)
        num++;
    }

    // 0
    // 1
    // 2
    // 3
    // 4
    // 5

## do...while

Executa instruções até que a condição se torne falsa.
Porém **a primeira execução sempre ocorre**.

Exemplo:

    let num = 6

    do{
        console.log(num)
        num++
    } while (num <= 5)

    // 6

----

# This

A palavra reservada **this** é uma referência do contexto.
No exemplo, **this** refere-se ao objeto pessoa.

    const pessoa = {
        firstName: "André",
        lastName: "Soares",
        id : 1,
        fullName: function() {
            return this.firstName + " " + this.lastName
        },
        getId: function() {
            return this.id
        }
    }

    pessoa.fullName();
    // André Soares

    pessoa.getId();
    // 1

Seu valor pode mudar de acordo com o lugar no código onde foi chamada.

Contexto | Referência
---------|-----------
Em um objeto (método)| Próprio objeto dono do método
Sozinha | Objeto global (em navegadores, window)
Função | Objeto global
Evento | Elemento que recebeu o evento 

Navegador

    > this 
        Window

Dentro de uma função

    (function ( ) {
        console.log(this)
    })();
    
    //Object global

Fora de função

    console.log(this)
    // {}

Dentro de um objeto (método)

    const pessoa = {
        firstName: "Diego",
        lastName: "Vieira",
        getFullName: function( ) {
            console.log(`${this.firstName} ${this.lastName}`)
        }
    }

    pessoa.getFullName()
    // Diego Vieira

Em um evento (retorna o próprio evento):

    <button 
        id = "my-btn"
        onclick = "console.log(this)"
    >click me! </button>

    //<button id = "my-btn" onclick = "console.log(this)">click me! </button>

## manipulando o valor do this

**Call**

    const pessoa = {
        nome: 'Miguel'
    }

    const animal = {
        nome: 'Murphy'
    }

    function getSomething() {
        console.log(this.nome)
    }

    getSomething(pessoa)
    //Miguel
    getSomething(animal)
    //Murphy

É possível passar parâmetros para essa função separando-os por vírgulas.

    const myObj  = {
        num1: 2,
        num2: 4
    }

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b)
    }

    soma.call(myObj, 1, 5)
    // 2(num1) + 4(num2) + 1 + 5 = 12

**Apply**

É possível passar parâmetros para essa função dentro de um array.

    const myObj  = {
        num1: 2,
        num2: 4
    }

    function soma(a, b) {
        console.log(this.num1 + this.num2 + a + b)
    }

    soma.appl(myObj, [1, 5])
    // 2(num1) + 4(num2) + 1 + 5 = 12

**bind**
 
Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

    const retornaNomes = function() {
        return this.nome
    }

    let bruno = retornaNomes.bind({nome: 'Bruno'})

    bruno() //clone da function, variável é chamado como um função
    //Bruno

----------

# Arrow functions

Exemplo de sintaxe:

    const helloWolrd = () => "Hello World!"

Se tiver uma linha só, não precisa de return ou chaves.

    const soma = (a, b) => a + b;

    soma(4, 6)
    //10
Obs. caso tenha paenas um parâmetro, pode dispensar os parenteses.

**Arrow function NÂO faz hoisting**

- "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
- Não existe o objeto "arguments";
- O construtor (ex.: new MeuObjeto()) também não pode ser utilizados nas arrow functions.