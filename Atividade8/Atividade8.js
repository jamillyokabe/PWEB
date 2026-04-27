let cont = Number(prompt("Quantidade de pessoas da pesquisa: "));

let idadeAll = [];
let sexoAll = [];
let opiniaoAll = [];
let maior = 0;
let menor = 0
let soma = 0;
let media = 0;
let qtdePessimo = 0;
let qtdeBomOtimo = 0;
let qtdeMulher = 0;
let qtdeHomem = 0;
let qtdeOutro = 0;

for (let i = 0; i < cont; i++){
    let idade = Number(prompt("Digite a idade:"));
    let sexo = prompt("Digite o sexo: (F - feminino; M - masculino; O - outros)").toUpperCase();
    let opiniao = Number(prompt("Qual opinião?\n1 - Péssimo\n2 - Regular\n3 - Bom\n4 - Ótimo"));

    //idade
    if (i === 0){
        maior = idade;
        menor = idade;
    }

    if (idade > maior){
        maior = idade;
    }
    if (idade < menor){
        menor = idade;
    }
    soma += idade;

    //opinião
    if (opiniao === 1){
        qtdePessimo++;
    }

    if (opiniao === 3 || opiniao === 4){
        qtdeBomOtimo++;
    }

    //sexo
    if (sexo === "F"){
        qtdeMulher++;
    }
    if (sexo === "M"){
        qtdeHomem++;
    }
    if (sexo === "O"){
        qtdeOutro++;
    }

    idadeAll.push(idade);
    sexoAll.push(sexo);
    opiniaoAll.push(opiniao);
}

media = idadeAll.length > 0 ? soma/idadeAll.length : 0;

alert("Média das idades: " + media.toFixed(2) + " anos\n" + 
      "Maior idade: " + maior + " anos\n" + "Menor idade: " + menor + " anos\n\n");
alert("Quantidade de pessoas que responderam 'Péssimo': " + qtdePessimo + " pessoa(s)\n" +
     "% de pessoas que responderam Bom/Ótimo: " + ((qtdeBomOtimo/sexoAll.length) * 100).toFixed(2) + "%");
alert("Quantidade de pessoas que responderam:\n\n" + "Feminino: " + qtdeMulher + "\n" + "Masculino: " + qtdeHomem + "\n" + "Outros: " + qtdeOutro);