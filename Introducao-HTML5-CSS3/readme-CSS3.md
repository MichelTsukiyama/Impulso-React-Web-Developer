# CSS3

O CSS surgiu da necessidade de formatar as páginas HTML e assim, em 1996, foi criada a linguagem de estilo CSS.

A sintaxe é simples, você cria regras de estilo para elementos ou grupo de elementos

Para adicionar um arquivo CSS no HTML use a tag link, conforme exemplo abaixo:
    
    <link rel="stylesheet" href="styles.css">

Obs.: no href você coloca o caminho até o arquivo CSS

---

# ID x Classe

ID: no CSS ID é representado pelo símbolo # (hash) seguido do nome do ID.

Classe: é representada por um ponto '.' seguida do nome da classe.

Obs.: O ID só pode ser usado uma vez na página HTML, enquanto classes não tem restrições.

Também é possível estilizar todas as tags HTML com o mesmo nome.

---

# Box-model

O navegador representa cada elemento HTML como uma caixa retangular. O CSS pode alterar a aparência desta caixa (tamanho, cor, etc). Essa caixa é composta por 4 áreas: conteúdo, padding, borda e margem.
- margem (margin) são espaçamentos entre elementos;
- as bordas (border) ficam entre a magem e o padding;
- padding é um espaçamento entre as bordas e o conteúdo;
- conteúdo (content) é o que seu bloco representa, um texto, uma imagem, etc.

----

# Estilizando elementos

Há 3 formas de alterar o padding e margin. A primeira é colocando um valor para as partes inferiores e superiores, a segunda é colocando um valor para cada lado e a terceira é com propriedades específicas para cada lado.

----

# Background

Há 3 formas de usar um cor de fundo, a primeira é pelo nome da cor, a segunda pelo código hexadecimal e a terceira usando o atalho background.

---

# Border

A propriedade border pode ter 3 valores: a largura, a cor e o estilo;

Estilos de borda: solid, dotted e dashed.

Há também a propriedade border-radius que permite arredondar a borda.

---

# Estilizando textos

**font-family** permite alterar a fonte dos textos, como uma fonte da internet ou instalada em nosso computador. Prefira usar as web safe fonts, que são fontes existentes em praticamente todos os sistemas, podendo ser usadas sem preocupação

**font-size** altera o tamanho da fonte;

**font-style** altera o estilo da fonte, por exemplo é possível coloca-la em itálico ou normal, por exemplo.

---

## Obs. veja os exemplos no arquivos CSS dentro desta pasta.

---

# Links úteis

[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/CSS).
[DevMedia](https://www.devmedia.com.br/guia/css/38149).
[Blog Kinsta](https://kinsta.com/pt/blog/design-responsivo-web/).
