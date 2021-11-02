# Paradigmas

A programação possui 2 paradigmas, Imperativo e Declarativo.

**Imperativo**

- Procedural
- Orientado a Objetos
- Parallel Processing

**Declarativo**

- Lógico
- Funcional
- Database
- Dataflow

---

## Orientação a objetos

Os programas são "objetos" que possuem uma série de propriedades.

**Pilares**

- Herança
- Polimorfismo
- Encapsulamento
- Abstração

----

### Abstração

Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo.

Exemplo

Carros, motos, caminhões, bicicletas, etc. são => **Veículo com rodas** => **Veículo**

Barco => **Veículo**

Veja que o primeiro grupo (carros, motos, ...) e o barco são veículos, no entanto o barco não pode ser especificado como um Veículo com rodas.

---

### Herança

O objeto filho herda propriedades e métodos do objeto pai.

----

### Encapsulamento

Cada classe tem propriedades e métodos independentes do restante do código

----

### Polimorfismo

Objetos poderm herdar a mesma classe pai, mas se comportam de forma diferente quando invocamos seus métodos.

----

# Javascript orientado a objetos (OOJS - Oriented Objects Javascript)

## Protótipos

Todos os objetos Javascript herdam propriedades e métodos de um prototype.

O objetos Object.prototype está no topo desta cadeia.

Exemplo de cadeia de protótipos (prototype chain):

*f* Crow => *f* Bird => *f* Animal.constructor => *f* Function => *f* Function.prototype.constructor => *f* Object () {} => *f* Object.prototype = null;

----

## Classes

**Syntatic sugar** : uma sintaxe feita para facilitar a escrita

OLD | NEW
----|----
var Meal = function (food){<br>this.food = food<br>}<br><br>Meal.prototype.eat = function () {<br>return " =) "<br>} | class Meal {<br>constructor (food){<br>this.food = food<br>}<br>eat () {<br>return " =) "<br>}<br>}

Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.