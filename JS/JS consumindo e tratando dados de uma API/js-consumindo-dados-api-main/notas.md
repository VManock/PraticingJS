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

Utilizando o then e o .json convertemos o objeto do tipo response em um arquivo parecido com .js que pode ser utilizado