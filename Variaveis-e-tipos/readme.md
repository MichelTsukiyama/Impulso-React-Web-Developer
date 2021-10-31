# Atribução de Valores

Boas práticas para escrever variáveis

Case type | Example
----------|---------
Original Variable as String | some awesome var
Camel Case | someAwesomeVar
Snake Case | some_awesome_var
Snake Upper Case | SNAKE_UPPER_CASE
Kebab Case | some-awesome-var
Pascal Case | SomeAwesomeVar

## var, let e const

Variavel | Escopo | Hoisting | Redeclaração | Reatribuição | Escrita
---------|--------|----------|--------------|--------------|----------
var | Global | sim | sim | sim | camelCase
let | Bloco | não | não | sim | camelCase
const | Bloco | não | não | não | SNAKE_UPPER_CASE

**Hoisting** - Você pode atribuir um valor a uma variável antes de declarar ela (leva a variável para o início do código)


**Redeclaração** - declarar uma variavel já existente

**Reatribuição** - trocar o valor dentro da variável

----------------------------------
# Estrutura de dados

**Tipagem dinâmica** - antes de declarar um valor, você não especifica o **tipo** dele (string, int, double, boolean, etc...);

**Tipos primitivos** - numbers, strings, boolean, null, undefined;

**Não primitivos** - objects, arrays;

## Strings

- Comumente utilizada para textos;
- Valores declarados entre aspas ou crases.

**Métodos importantes**

- concatenação;
- propriedade length;
- iterabilidade;
- formatação
- index de letras;

## Numbers

- Inteiros ou decimais

**Métodos importantes** - Math

Obs. string/number = primitivo, String/Number = object

## Booleans

- verdadeiro(true) ou falso(false)

- sinal "!" inverte o valor do boolean ex.: !true = false 

## Arrays (Vetores)

- Lista iterável de elementos.

0 | 1 | 2 | 3 | 4 | 
--|---|---|---|---| 
 | | | | x|

No exemplo acima os valores de 0 a 4 são Indices;
O primeiro indice é 0;
O elemento 'x' está no indice 3;
O comprimento do array é 5 (0,1,2,3,4);

# métodos

- push() - adiciona um item no final do array;
- unshift() - adiciona no começo do array;
- pop() - remove o último item do array;
- shift() - remove o primeiro item do array;
- includes() - verifica se há o item no array;
- reverse() - inverte a ordem do array;
- há muitos outros

## Objetos 

Estrutura do tipo "chave e valor", no exemplo abaixo "nome" é a chave e "John" é o valor:

*let* person = {
    nome: "John",
    idade: 20
};

Obs.: em outras linguagens são "dicionários de dados", "HashTable", etc.

**Métodos**

- values() - retorna os valores no objeto;
- keys() - retorna as chaves do objeto;
- outros...

## Empty, undefined e null

**Empty** - Não possui um valor 'dentro', está vazio, Ex.: 0(number), "" (string);

**null** - O valor não existe;

**undefined** - Não foi declarado.

----------------------
# Para saber mais

Pesquisar:
- var, let, const - what's the difference?
- Diferença entre var, let e const no Javascript?
- Hoisting - Glossário
- Conveções de Javascript
- Boas práticas em Javascript
- Null vs Undefined vs Empty in Javascript - A simple guide
- Estrutura de dados do Javascript
- Sintaxe e tipos
- Entendendo so tipos variáveis em JavaScript
- JavaScript Data Types






