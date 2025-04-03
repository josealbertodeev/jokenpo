function jogar() {
    let nome = prompt("Qual o seu nome?");
    valorNome = isNaN(nome)

    if (nome == null || nome == "" || valorNome == false) {
        alert("Por favor, digite seu nome!");
        return;
    }

    let idade = prompt("Quantos anos você tem?");
    idade = parseInt(idade);
    valorIdade = isNaN(idade)

    if (idade < 18 || valorIdade == true) {
        alert("Você NÃO pode jogar jokenpo!");
        return;
    }
    else {
        let escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura");

        // Gera um número aleatório entre 1 e 3
        let escolhaComputador = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador != 1 && escolhaJogador != 2 && escolhaJogador != 3) {
            alert("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
            return;
        }

        escolhaJogador = parseInt(escolhaJogador);

        let nomeEscolhaComputador;
        switch (escolhaComputador) {
            case 1:
                nomeEscolhaComputador = "Pedra";
                break;
            case 2:
                nomeEscolhaComputador = "Papel";
                break;
            case 3:
                nomeEscolhaComputador = "Tesoura"
        }

        if (escolhaJogador == escolhaComputador) {
            //Jogador Pedra, computador Pedra --> empate
            //Jogador Tesoura, computador Tesoura --> empate
            //Jogador Papel, computador Papel --> empate
            alert("Empate!");
        }

        if (escolhaJogador == 1) {
            if (escolhaComputador == 2) {
                //Jogador Pedra, computador Papel --> computador vence
                alert("O computador venceu!");
            }
            if (escolhaComputador == 3) {
                //Jogador Pedra, computador Tesoura --> jogador vence
                alert(`Parabéns ${nome}, você venceu!`);
            }
        }
        if (escolhaJogador == 2) {
            if (escolhaComputador == 1) {
                //Jogador Papel, computador Pedra -->jogador vence
                alert(`Parabéns ${nome}, você venceu!`);
            }
            if (escolhaComputador == 3) {
                //Jogador Papel, computador Tesoura --> computador vence
                alert("O computador venceu!");
            }
        }
        if (escolhaJogador == 3) {
            if (escolhaComputador == 2) {
                //Jogador Tesoura, computador papel --> jogador vence
                alert(`Parabéns ${nome}, você venceu!`);
            }
            if (escolhaComputador == 1) {
                //Jogador Tesoura, computador Pedra --> computador vence
                alert("O computador venceu!");
            }
        }
        alert("Escolha do computador: " + nomeEscolhaComputador);
    }
}