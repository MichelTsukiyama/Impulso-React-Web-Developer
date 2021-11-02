# Estrutura Map

**Características**
- Uma coleção de arrays no formato [chave, valor];
- Pode ser iterado por um loop for...of

**Declaração**

    const myMap = new Map()

**Métodos (adicionar, ler e deletar)**

    const myMap = new Map()

    myMap.set('apple', 'fruit')
    //Map(1) {'apple' => 'fruit'}

    myMap.get('apple')
    //fruit

    myMap.delete("apple")
    //true

    myMap.get("apple")
    //undefined

Obs.: set (chave, valor)

## Map vs Objeto

- Maps podem ter chaves de qualquer tipo;
- Maps possuem propriedade length;
- Maps são mais fáceis de iterar;
- Utilizado quando o valor das chaves é desconhecido;
- Os valores tem o mesmo tipo.

---

# Estrutura set

Sets são estruturas que armazenam apenas valores únicos (Não tem valores repetidos).

    const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1]

    const mySet = new Set (myArray)

    >set(8) {1, 2, 3, 4, 5, ...}
        >[[Entries]]
            > 0 : 1
            > 1 : 2
            > 2 : 3
            > 3 : 4
            > 4 : 5
            > 5 : 6
            > 6 : 7
            > 7 : 8

**Métodos (adicionar, consultar, deletar)**

    const mySet = new Set ();

    mySet.add(1)
    mySet.add(5)

    mySet.has(1)
    //true

    mySet.has(3)
    //false

    mySet.delete(5)

**Sets vs arrays**

- Possui valores únicos;
- Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce, etc.

