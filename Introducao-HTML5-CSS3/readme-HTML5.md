# HTML 5

HTML é uma línguagem de marcação, inicialmentee criada para melhorar a comunicação, criada por Tim Berners-Lee em 1991.

HTML é utilizado para estruturar páginas webs, adicionando textos, imagens, vídeos e outros formatos nas páginas web.

É composto por elementos, esses elementos são formados por tags e seus atributos

Ex.: \<div\ id="" class=""> \</div\>
\<div\> - tag de abertura
\</div> - tag de fechamento
id="" class="" - atributos

Com esses elementos é possível agrupar tipos de conteúdo.

----
# Estrutura básica HTML

A primeira linha deve ser \<!DOCTYPE html>, esta diz ao navegador que ele está lidando com um arquivo do tipo HTML5.

## \<html>
A tag html é a raiz do documento, todos os elementos HTML devem estar dentro dela. Aqui informaremos o idioma, através do atributo lang, para o português usamos o pt-BR

## \<head>
Esta tag contém os elementos que serão lidos pelo navegador, como metadados (charset - codificação de caracteres, javascript com a tag script, CSS através da tag style e link, título da página com a tag tittle).

## \<body>
Aqui fica todo o conteúdo visível ao usuário: textos, imagens, vídeos, etc.

------

# Semântica

Na quinta versão do HTML, lançada em 2014 foi implementada a semântica. Esta permite descrever mais precisamente o conteúdo, assim damos significado as divs.

Ex.: 

\<section> Representa uma seção genérica de conteúdo

\<header> Cabeçalho da página ou de uma seção da página, normalmente contém logotipos, menus, campos de busca, etc.

\<article> Representa um conteúdo independente e de maior relevância

\<aside> É uma seção que engloba conteúdos relacionados ao conteúdo principal. Normalmente usando em barras laterais

\<footer> Representa o rodapé do conteúdo.

\<h1> Na verdade é possível ir até o h6, é utilizado para marcar a importância dos títulos, sendo o h1 o mais importante.

-----

# Textos e links

\<p> representa um parágrafo, suportanto textos, mas também pode adicionar imagens, vídeos e outros conteúdos.

\<a> significa anchor/âncora, representa um hiperlink, interligando conteúdos e páginas na web.

Dentro do \<a> podemos ter o atributo href, que é o hyperlink para onde sua âncora aponta. No caso de e-mails ou telefones é necessário adicionar os prefixos mailto: e tel: respectivamente.

Podemos ter também o atributo target, usado para abrir links em outra aba no navegador.

Exemplo:

    <a href="mailto:lucas@vilaboim.com" target="_blank">lucas@vilaboim.com</a>

----

# Imagens

O elemento \<img src="" alt=""> é simples, serve para adicionar imagens. Mas é obrigatório ter o atributo src que guarda o caminho para a imagem.
O alt não é obrigatório, mas é recomendável, nele você descreve o que é a imagem e leitores de tela usam ele para descrever a imagem, melhorando a acessibilidade.

---

# Listas

Listas servem para organizar uma coleção de itens, podemos usar:

\<ul> - cria uma lista não ordenada, representada por pontos, círculos etc.

\<ol> - cria uma lista ordenada, representada com números, algarismos romanos ou letras

\<li> - é utilizado dentro dos itens anteriores, podendo conter vários tipos de conteúdo como textos, imagens, outras listas, etc.

---

# Prática

Crie um arquivo chamado de index.html ou veja o arquivo de exemplo dentro desta pasta.

*Se estiver utilizando o VS Code, após criar o arquivo, digite na primeira linha html, na barra do emmet que surgir escolha html:5 e a IDE vai criar toda estrutura html para você.

Após criar seu arquivo index.html, escreva a seguinte estrutura:

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>

Escreva algo dentro da tag \<body> para visualizar no navegador. Ex.:
    \<body>
        Escreva seu texto aqui
    \</body>

Clique com o botão direito no seu arquivo e abra ele com seu navegador.

Utilize as outras tags em seu arquivo, ou verifique o arquivo index.html dentro desta pasta

-----

## Links úteis

[Mozilla developer](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element) - Documentação com outras tags.