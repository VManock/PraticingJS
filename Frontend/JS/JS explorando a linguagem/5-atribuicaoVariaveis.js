console.log("Atribuição de Variáveis");

// const idade = 20;
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

// console.log(nome + " " + sobrenome);
console.log(primeiroNome,sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// nome = nome + sobrenome; --> sobreescrita
console.log(primeiroNome);

// const -> constante
// let -> variável

/*
Boas práticas:
Não ficar mudando o tipo da variável;
Manter as váiaveis como constantes o máximo possível;
Reduza o uso do let;
Use o nome mais claro possível para facilitar a leitura
*/

const nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);

//uso de variável let

let contador = 0;

contador = contador +1;

/* parseInt e parseFlot são usados para forçar a mudança de tipo para 
números inteiros ou números decimais */

let idade; // delcarando variável
idade = 26; // atribuinfo valor
idade = idade+1;
console.log(idade);