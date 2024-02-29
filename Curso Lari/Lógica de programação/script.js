var numeralExercicio = parseInt(prompt("Selecione o exercício desejado utilizando o numeral correspondente (1, 2, 3, 4 ou 5).\n\n1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C.\n\n2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.\n\n3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.\n\n4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.\n\n5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20)."))

if (numeralExercicio == 1) {
    exercicio1()
} else if (numeralExercicio == 2) {
    console.log("WIP")
} else if (numeralExercicio == 3) {
    console.log("WIP")
}else if (numeralExercicio == 4) {
    console.log("WIP")
}else if (numeralExercicio == 5) {
    console.log("WIP")
}else if (numeralExercicio != Number) {
    alert('Isso não é um número, por favor selecione um número')
}else {
    alert("Erro! Reinicia a página")
}

selecionaNovoExercicio()

function comparaABC (a,b,c) {
    if (a + b < c) {
        var soma = a + b
        return console.log(`Resultado do exercício 1: A soma de a+b é ${soma} o que é menor que o valor de c (${c})`)
    } else if (a + b == c) {
        return console.log(`Resultado do exercício 1: A soma de a (${a}) + b (${b}) é igual a c (${c})`)
    } else if (a + b > c) {
        return console.log("Resultado do exercício 1: A soma de a + b foi maior que c.")
    } else {
        return console.log("Erro")
    }
}

function exercicio1() {
    var a = parseInt(prompt("Você selecionou o exercicio 1, insira o valor de 'a'"))
    var b = parseInt(prompt("Obrigado, agora insira o valor de 'b'"))
    var c = parseInt(prompt("Obrigado, agora insira o valor de 'c'"))
    
    comparaABC(a, b, c)
}

function selecionaNovoExercicio() {
    var numeralExercicio = parseInt(prompt("Pronto! O resultado do exercício anterior está no console\n Selecione um novo exercício desejado utilizando o numeral correspondente (1, 2, 3, 4 ou 5).\n\n1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B e mostre se a soma é menor que C.\n\n2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.\n\n3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.\n\n4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.\n\n5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20)."))

    if (numeralExercicio == 1) {
        var a = parseInt(prompt("Você selecionou o exercicio 1, insira o valor de 'a'"))
        var b = parseInt(prompt("Obrigado, agora insira o valor de 'b'"))
        var c = parseInt(prompt("Obrigado, agora insira o valor de 'c'"))
        
        comparaABC(a,b,c)
    
        selecionaNovoExercicio()
    } 
    
    else if (numeralExercicio == 2) { 
        var numeralExercicio = parseInt(prompt("Você selecionou o exercício 2, insira um número por favor."))
    }
    else if (numeralExercicio == 3) {}
    else if (numeralExercicio == 4) {}
    else if (numeralExercicio == 5) {}
    else if (numeralExercicio != Number) {alert('Isso não é um número, por favor selecione um número')}
    else {alert("Erro")}
} 




    



// EXERCÍCIO 12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento
//  pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
 
//  Tabela de Código de Condições de Pagamento
//  1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

//  2 - À Vista no cartão de crédito, recebe 10% de desconto

//  3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

//  4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

// var valor_original = parseFloat(prompt("Qual o valor original do produto?"))

// var metodo_de_pagamento = prompt(
//   "Qual o metodo de pagamento? \n\n1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto; \n2 - À Vista no cartão de crédito, recebe 10% de desconto; \n3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros; \n4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%"
// );

// var valor_final = calcular_valor_final(valor_original, metodo_de_pagamento);

// alert("O valor final a ser pago deve ser R$" + valor_final.toString());



// function calcular_valor_final(valor_original, metodo_de_pagamento) {
//   var valor_final;

//   if (metodo_de_pagamento == "1") {
//     valor_final = valor_original * 0.85;
//   } else if (metodo_de_pagamento == "2") {
//     valor_final = valor_original * 0.9;
//   } else if (metodo_de_pagamento == "3") {
//     valor_final = valor_original;
//   } else {
//     valor_final = valor_original * 1.1;
//   }

//   valor_final = valor_final.toFixed(2);
//   return valor_final;
// }

// Exercicio 19
// var numero_da_esquerda = 1
// var numero_da_direita = 1

// while (numero_da_esquerda <= 10) {
//   while (numero_da_direita <= 10) {
//     var multiplicacao = numero_da_esquerda * numero_da_direita;
    
//     console.log(
//       numero_da_esquerda.toString() +
//         " x " +
//         numero_da_direita.toString() +
//         " = " +
//         multiplicacao.toString()
//     );
//     numero_da_direita += 1;
//   };
//   numero_da_direita = 1;
//   numero_da_esquerda += 1;

// };