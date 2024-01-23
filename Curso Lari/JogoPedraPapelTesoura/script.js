function escolher(opcao) {
    var opcao_oponente = Math.floor(Math.random() * 3)

    console.log(opcao) 
    console.log(opcao_oponente)
    
    document.getElementById("oponente_escolhendo").setAttribute("style","opacity:0;");

    
    if (opcao == "pedra" && opcao_oponente == 0){
        return console.log("Empate!");
    } else if (opcao == "pedra" && opcao_oponente == 1){
        return console.log("Derrota!");
    } else if (opcao == "pedra" && opcao_oponente == 2){
        return console.log("Vitória!");

    } else if (opcao == "papel" && opcao_oponente == 1){
        return console.log("Empate!");
    } else if (opcao == "papel" && opcao_oponente == 2){
        return console.log("Derrota!");
    } else if (opcao == "papel" && opcao_oponente == 0){
        return console.log("Vitória!");

    } else if (opcao == "tesoura" && opcao_oponente == 2){
        return console.log("Empate!");
    } else if (opcao == "tesoura" && opcao_oponente == 0){
        return console.log("Derrota!");
    } else if (opcao == "tesoura" && opcao_oponente == 1){
        return console.log("Vitória!");
    } else {
        console.log("Erro!");
    }

    



}