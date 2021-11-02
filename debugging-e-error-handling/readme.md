# ECMAScript Error

Erros que acontecem em tempo de execução.

**Composto por**

-   mensagem
-   Nome
-   Linha
-   Call Stack

# DOMException

Erros relacionados ao Document Object Model (DOM)

## Try, catch, throw e finally

    function verificaPalindromo(string) {
        if(!string) throw "String inválida";

        return string === string.split('').reverse().join('');
    }

    
    function tryCatchExemplo (string) {
        try{
            return verificaPalindromo(string)
        }
        catch(e) {
            throw e
        }
        finally {
            console.log("A string enviada foi: " + string)
        }
    }

**Try** - tenta executar o bloco;
**Catch** - vai "capturar o erro apresentado" caso o bloco do try não possa ser executado;
**Throw** - vai lançar o erro;
**Finally** - sempre é executado, independente do resultado do try

## Objeto Error

Código:

    new Error(message, fileName, lineNumber)

    //todos os parâmetros são opcionais

    const MeuErro = new Error('Mensagem inválida');

    throw MeuErro;

Resultado:

"Uncaught Error: Mensagem Inválida at \<anonymus\> :1:17"