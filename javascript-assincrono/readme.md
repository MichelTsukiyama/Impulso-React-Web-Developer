# Assincronicidade

**Assíncrono** é algo que não ocorre ou não se efetiva ao mesmo tempo.

O Javascript roda de maneira **síncrona**.

**Síncrono**

Etapas | Client | Server
-------|--------|--------
1 |faz a requisição | recebe a requisição
2 | **aguarda pela resposta** | processa a requisição
3 | recebe a resposta | devolve a requisição

**Assíncrono**

Etapas | Client | Server
-------|--------|--------
1 |faz a requisição | recebe a requisição
2 | **continua trabalhando** | processa a requisição
3 | recebe a resposta | devolve a requisição

-----

## Promises

- Objeto de processamento assíncrono;
- Inicialmente, seu valor é desconhecido. Ela pode, então ser **resolvida** ou **rejeitada**;
- Pode ter 3 estados: Pending, Fulfilled e Rejected

Etrutura:

    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 2000);
    });

Manipulação:

    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve(console.log('Resolvida!'));
        }, 2000);
    });

    await myPromise
        .then((resulta) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    // após 2 segundos, retornará o valor
    //"Resolvida passando pelo then e agora acabou!"

-----

## Async / await

-   Funções assíncronas precisam dessas duas palavras chave.

-   **Async** define funções assíncronas.

-   **Await** vai parar o código e esperar a **Promise** ser resolvida. Só depois que ela for resolvida o código continua rodando.

-   Funções assíncronas também retornam Promises!

-----

## O que são APIs (Application Programming Interface)

Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.

Você consegue acessa-las por meio de URLs.

**JSON**: JavaScript Object Notation

É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.

## Fetch

Usado para consumir APIs

    fetch(url, options)
        .then(response => response.json()) //converte para json
        .then(json => console.log(json))

    //retorna uma Promise

Operações no banco (POST, GET, PUT, DELETE, etc):

    fetch('http://endereco-api.com/', {
        method: 'GET',
        cache: 'no-cache'
    })
        .then(response => response.json()) //converte para json
        .then(json => console.log(json))
    //retorna uma promise

Outro exemplo:

    fetch('http://endereco-api.com/', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then(response => response.json()) //converte para json
        .then(json => console.log(json))
    //retorna uma promise

Obs. sempre é necessário tratar os dados quando se recebe ou envie para um banco

**Muito importante lembrar que fetch sempre retorna uma PROMISE!**
