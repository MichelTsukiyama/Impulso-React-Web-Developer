# História e Conceitos

- ReactJS é uma **biblioteca** JavaScript para criar interfaces de usuário.
- Criado em 2011 por Jordan Walke no Facebook;
- Baseado no XHP, um framework para criação de HTML no PHP;
- 2012 utilizado no Instagram;
- 2013 anúncia para liberação OpenSource na JSConf;
- 2015 React Native;
- 2015 UWP (Universal Windows Platform);
- É uma biblioteca, não é um framework. (diferente do Angular, que é um framework);
- A principal função é a criação da interface para o usuário;
- React é uma linguagem declarativa;
- O React está preocupado apenas com o que é exibido na interface do usuário;
- Pode ser utilizado no front, back-end e em diversos dispositivos;
- Baseado em componentes;

------

# Configuração

- React Create App;
- React Scripts;
- Task Runners e Bundler Sizers;

Obs.: pesquisar sobre NPM

No cmd linux ou gitBash(windows):

    Crie uma pasta
    git init (inicializa um repositório)
    npm init (na sequencia o cmd colocará várias perguntas, pode dar "enter" em todas por enquanto)

Depois dos passos acima a seguinte estrutura deve aparecer:

    {
    "name": "testereact",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
    }

    Is this Ok? (yes) //responda yes

Na sequência instale: 

    npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1

Aguarde até o fim da instalação e digite:

    ll 

    //deve retornar os arquivos criados (node_modules, package-lock.json e package.json)

    total 705
    drwxr-xr-x 1 miche 197609      0 Nov  2 14:43 node_modules/
    -rw-r--r-- 1 miche 197609 522594 Nov  2 14:43 package-lock.json
    -rw-r--r-- 1 miche 197609    313 Nov  2 14:43 package.json

Obs. Neste repositório foi feito na pasta **testeReact**

Crie um HTML simples e faça uma:

    <div id="root"></div>

Crie um arquivo CSS (react script exige que se crie um arquivo css)

Crie um arquivo Javascript e faça os imports

    import React from "react"
    import ReactDOM from "react-dom"
    import "./styles.css"

    const App = () => {
    return (
        <div className="App">
            Hello World
        </div>
    )
    }

    const rootElement = document.getElementById("root")
    ReactDOM.render(<App/>, rootElement)

-----

# O que é JSX

const element = \<h1>Hello, world!\</h1>; (Não é HTML e nem uma string!)

Linguagem de marcação criada para poder criar elementos primitivos HTML e ter todo poder do JavaScript dentro dele. Pode-se ter funções e variáveis dentro do JSX.

- React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes;
- Não é obrigatório a utilização do JSX;
- Sintax Suggar para React.createElement;
- O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel.

**Obs.: No React *class* é uma palavra reservada, para criar uma *class* HTML utiliza-se *className***

----

# Renderização

- Renderização de elementos;
- React DOM;
- Nós Raiz