# O que são módulos

Módulos são arquivos Javascript que tem a capacidade de **exportar** e **importar** informações de **outros arquivos** do mesmo tipo.

**Algumas vantagens são**

- Organização do código;
- Compartilhamento de variáveis em escopos diferentes;
- Explicita as dependências dos arquivos.

------

## Exportar

**Named exports**

Exemplo 1:

    export function mostraIdade (pessoa) {
        return `A idade de ${pessoa.nome} é ${pessoa.idade}`
    }

Exemplo 2:

        function mostraIdade (pessoa) {
        return `A idade de ${pessoa.nome} é ${pessoa.idade}`
    }

    export {
        mostraIdade,
        mostraCidade
    }

**default exports**

 - Só pode haver um por arquivo;
 - Será o retorno padrão do seu arquivo.
Exemplo:

        export default mostraIdade

-------

## Importar

**Named exports**

Exemplo:

    import {funcao, variavel, classe} from './arquivo.js'

**Default exports**

Exemplo:

    import valorDefault from './arquivo.js'

**Trocando nome de imports:**

    import {arquivo as Apelido} from './arquivo.js';

    Apelido.metodo();

**Importando todos os dados de um arquivo**

    import * as INFOS from './arquivo.js'

    INFOS.metodoA();

    console.log(INFOS.variavel);

------------

## Vincular ao HTML

    <script type="module" src="./main.js"> </script>

**Precisa colocar o atributo "type" com valor "module"**

Para fazer testes localmente (de um arquivo no seu computador), será necessário estar rodando um servidor, isso pode ser feito usando uma extensão, como o "Live Server" no VS Code.

-------------

## Curiosidade

- Módulos sempre estão em "strict mode";
- Podem ser utilizadas as extensões .js e .mjs;
- Para testes locais, é necessário utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar, sempre utilize "./" como ponto de partida.