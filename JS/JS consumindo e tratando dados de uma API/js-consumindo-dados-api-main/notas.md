Síncrono e Assíncrono

Síncrono é o código que executa as tasks da queue uma atrás da outra;
Modelo padrão do JS;

Assíncrono é o código que separa a fila do código e não executa os comandos um atrás do outro;
setTimeOut é um comando que adiciona um intervalo de tempo entre a chamada e a execução daquele código;

Callback, uma função que gera uma ação após um tempo; 
seTimeOut é um exemplo de Callback

Requisições são os callbacks mais utilizados;

API = interface de programação de aplicações;

Método fetch: consome uma url de uma api e retorna uma promise;
O fetch é assincrono, e a promise pode resultar em solved ou rejected, enquanto ela não tem a conclusão ela permanece como pendding. 

O retorno do promise é um objeto do tipo response;

Then e JSON: 

Utilizando o then e o .json convertemos o objeto do tipo response em um arquivo parecido com .js que pode ser utilizado;

.catch é utilizado para quando nossa promessa é rejeitada;

E o .finally sempre será utilizado ao concluir a promessa;

Aula 04

callbackhell: Vários callbacks e thens o Async await é uma maneira de evitar isso;

Async Await: 
Parece um código sync porém utilizado a função "await";
O try {} em conjunto com o catch () {} pode ser utilizado para lidar com os erros;

Promise.all: Faz as requisições ao mesmo tempo;

<!-- Para saber mais: Then ou Async Await?
Quando produzimos um código assíncrono com o uso do .then nós fazemos uso de callback dentro deles. O maior problema com callbacks é que eles não são bem dimensionados mesmo para códigos assíncronos moderadamente complexos, onde temos vários .then em seguida do outro. O código resultante geralmente se torna difícil de ler, fácil de quebrar e difícil de depurar. Isso é o que chamamos de callback hell.

Para resolver isso, foi desenvolvido outra forma de construir um código assíncrono: o async await, que funciona de forma semelhante ao then mas o código fica mais “bonito”. Esse “embelezamento” em códigos é o que chamamos de syntax sugar.

Em ciência da computação, syntax sugar ou açúcar sintático (em tradução literal), é a sintaxe dentro de uma linguagem de programação que foi concebido para tornar as coisas mais fáceis de ler ou expressar. Isso torna a linguagem "mais doce" para uso humano: as coisas podem ser expressas de forma mais clara, de forma mais concisa, ou em um estilo alternativo que alguns podem preferir.

O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes: o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez.


https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar
O artigo “Async/await no JavaScript: o que é e quando usar a programação assíncrona?” pode te ajudar a entender ambos os casos e suas diferenças. -->

Aula 05