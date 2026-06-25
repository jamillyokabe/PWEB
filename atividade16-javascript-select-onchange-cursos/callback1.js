const prompt = require('prompt-sync')(); // parenteses indicam que estamos executando a função prompt-sync
// callback: uma função que é parâmetro para outra função

function saudacao(nome){
    console.log('Oi ' + nome);
}

function entradaNome(callback){
    let nome = prompt('Digite seu nome: ');
    callback(nome); //chamando a função callback (saudação)
}
entradaNome(saudacao);