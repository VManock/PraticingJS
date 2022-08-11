console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possívei:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item
} else if (estaAcompanhada) {
    console.log("Está acompanhado");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

// alt shift f -> formata o código

console.log(listaDeDestinos);