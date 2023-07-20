# QuizzifyMe
 Projeto desenvolvido como prática de estudo do curso CJRM. Você pode testar a aplicação [aqui!](https://quizzifyme.vercel.app/)

 ## Tecnologias
 - JavaScript
 - HTML5
 - Bootstrap CSS

## Projeto
Essa aplicação é uma página simples de quizz onde até o momento tem apenas quatro perguntas.
- Basicamente uso uma função para pegar as respostas do usuário que será enviada através de um submit. Essas respostas são armazenadas em um array através do método forEach() e depois são comparadas com o array de respostas corretas.
- Após o armazenamento das respostas do usuário, uma função que irá comparar os elementos dos dois arrays será executado e caso a condicional passada para essa função seja satisfeita 25 pontos será acrescentado a pontuação do usuário para cada resposta correta.
- Quando o usuário envia suas respostas um modal é exibido na tela informando a porcetagem de acertos. Há uma pequena animação na contagem dessa porcentagem, essa animação foi feita usando o método setInterval(), esse método executa um trecho de código com um delay de 10 milisegundos passado como segundo argumento.


 
