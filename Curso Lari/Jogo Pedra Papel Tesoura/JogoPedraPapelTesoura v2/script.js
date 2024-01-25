function escolher(opcao) {
    resetar_jogo()

    var opcao_oponente = Math.floor(Math.random() * 3)

    if (opcao_oponente == 0) {
        opcao_oponente = "pedra"
    } else if (opcao_oponente == 1) {
        opcao_oponente = "papel"
    } else {
        opcao_oponente = "tesoura"
    }
    
    var status_jogo = document.getElementById("status")
    
    if (condicoes_de_vitoria_atingidas(opcao, opcao_oponente)) {
        status_jogo.innerText = "Você ganhou, parabéns!"
    } else if (opcao == opcao_oponente) {
        status_jogo.innerText = "O jogo empatou, tente novamente!"
    } else {
        status_jogo.innerText = "Você perdeu, tente novamente!";
    }
    destacar_opcoes(opcao_oponente, opcao);
}

function destacar_opcoes(opcao_oponente, opcao) {
    document.getElementById("opcao_oponente_" + opcao_oponente).setAttribute("style", "opacity:1;");
    
    document.getElementById("pedra").setAttribute("style", "opacity:0.1;");
    document.getElementById("papel").setAttribute("style", "opacity:0.1;");
    document.getElementById("tesoura").setAttribute("style", "opacity:0.1;");

    document
      .getElementById(opcao)
      .setAttribute("style", "opacity:1;scale: 1.6;");
}

function condicoes_de_vitoria_atingidas(opcao, opcao_oponente) {
    if (opcao == "pedra" && opcao_oponente == "tesoura") {
        return true
    } else if (opcao == "papel" && opcao_oponente == "pedra") {
        return true
    } else if (opcao == "tesoura" && opcao_oponente == "papel") {
        return true
    } else {
        return false
    }
}

function resetar_jogo() {
  document.getElementById("pedra").setAttribute("style", "opacity:1;");
  document.getElementById("papel").setAttribute("style", "opacity:1;");
  document.getElementById("tesoura").setAttribute("style", "opacity:1;");

  document
    .getElementById("opcao_oponente_pedra")
    .setAttribute("style", "opacity:0.1;");
  document
    .getElementById("opcao_oponente_papel")
    .setAttribute("style", "opacity:0.1;");
  document
    .getElementById("opcao_oponente_tesoura")
    .setAttribute("style", "opacity:0.1;");
}