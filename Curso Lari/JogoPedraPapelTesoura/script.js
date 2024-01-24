function escolher(opcao) {      
    var opcao_oponente = Math.floor(Math.random() * 3)      
    console.log(opcao) 
    console.log(opcao_oponente)
    
    var status_jogo = document.getElementById("status")
    
    if (opcao == "pedra" && opcao_oponente == 0){
        status_jogo.innerText = "O jogo empatou, tente novamente!"
       
        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:0.1;");

    } else if (opcao == "pedra" && opcao_oponente == 1){
        status_jogo.innerText = "Você perdeu, tente novamente!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:0.1;");

    } else if (opcao == "pedra" && opcao_oponente == 2){
        status_jogo.innerText = "Você ganhou, parabéns!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:1;");


    } else if (opcao == "papel" && opcao_oponente == 1){
        status_jogo.innerText = "O jogo empatou, tente novamente!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:0.1;");

    } else if (opcao == "papel" && opcao_oponente == 2){
        status_jogo.innerText = "Você perdeu, tente novamente!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:1;");

    } else if (opcao == "papel" && opcao_oponente == 0){

        status_jogo.innerText = "Você ganhou, parabéns!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:0.1;");


    } else if (opcao == "tesoura" && opcao_oponente == 2){
        status_jogo.innerText = "O jogo empatou, tente novamente!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:1;");

    } else if (opcao == "tesoura" && opcao_oponente == 0){
        status_jogo.innerText = "Você perdeu, tente novamente!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:0.1;");

    } else if (opcao == "tesoura" && opcao_oponente == 1){
        status_jogo.innerText = "Você ganhou, parabéns!"

        document.getElementById('opcao_oponente_pedra').setAttribute("style","opacity:0.1;");
        document.getElementById('opcao_oponente_papel').setAttribute("style","opacity:1;");
        document.getElementById('opcao_oponente_tesoura').setAttribute("style","opacity:0.1;");
    } else {
        console.log("Erro!");
    }
    
}