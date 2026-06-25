let nome = prompt("Qual o seu nome?");

let resposta = alert("Confirmar o nome: " + nome + "?");


let nota1 = parseFloat(prompt("Olá " + nome + "!" + "\nDigite a nota da Prova 1: "));
let nota2 = parseFloat(prompt("Digite a nota Prova 2: "));
let nota3 = parseFloat(prompt("Digite a nota Prova 3: "));
let nota4 = parseFloat(prompt("Digite a nota Prova 4: "));

let media = (nota1 + nota2 + nota3 + nota4)/4;
alert(nome + "\nA sua média é: " + media);
