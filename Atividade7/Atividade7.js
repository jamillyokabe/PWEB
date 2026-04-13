var jogarNovamente = confirm("Deseja iniciar o jogo?");

while (jogarNovamente == true){
    let escolha = prompt("Pedra, papel ou tesoura?");
    let computador = Math.floor((Math.random()*3) + 1);
    let opcao;
    let compTexto;
    let resultado;
    
    // 1 - Pedra
    // 2 - Papel
    // 3 - Tesoura

    escolha = escolha.toLowerCase();
    
    if (escolha == "pedra"){
        opcao = 1;
    } else{
        if (escolha == "papel"){
            opcao = 2;
        } else{
            opcao = 3;
        }
    }

    if (opcao == computador){
        resultado = "Empate";
    }
    else{
        if (computador == 1){
            resultado = (opcao == 3) ? "Perdeu":"Ganhou"
        }

        if (computador == 2){
            resultado = (opcao == 1) ? "Perdeu":"Ganhou"
        }

        if (computador == 3){
            resultado = (opcao == 2) ? "Perdeu":"Ganhou"
        }
    }

    if (computador == 1){
        compTexto = "pedra";
    } else {
        if (computador == 2){
            compTexto = "papel";
        } else {
            compTexto = "tesoura";
        }
    }

    alert("A sua escolha foi: " + escolha + "\nSeu adversário: " + compTexto + "\n\nResultado: " + resultado);
    jogarNovamente = confirm("Jogar novamente?");
}