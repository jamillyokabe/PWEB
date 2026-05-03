let a = Number(prompt("Digite o PRIMEIRO número:"));
let b = Number(prompt("Digite o SEGUNDO número:"));
let c = Number(prompt("Digite o TERCEIRO número:"));

alert("Maior número: " + maiorNumero(a, b, c) + "\n" + "Ordem crescente: " + ordenarCrescente(a, b, c));

let texto = prompt("Digite o texto para verificar se é PALÍNDROMO:");
alert(palindromo(texto));

let p1 = prompt("Digite a PRIMEIRA palavra:");
let p2 = prompt("Digite a SEGUNDA palavra:");

alert (ehSubconjunto(p1, p2));

let d = Number(prompt("VERIFICAR O DIA DA SEMANA\n Digite o dia:"));
let m = Number(prompt("Digite o mês:"));
let y = Number(prompt("Digite o ano:"));

alert("Dia da semana da data: " + d + "/" + m + "/" + y + "\n" + diaSemana(y, m, d));


function maiorNumero(numero1, numero2, numero3){
    if (numero1 >= numero2 && numero1 >= numero3){
        return (numero1);
    }else if (numero2 >= numero1 && numero2 >= numero3){
        return (numero2);
    } else {
        return (numero3);
    }
}

function ordenarCrescente (numero1, numero2, numero3){
    return [numero1, numero2, numero3].sort((x, y) => x - y);
}

function palindromo (txt){
    txt = txt.toUpperCase().replace(/\s/g, "");
    let textoInvertido = txt.split("").reverse().join("");

    if (txt == textoInvertido){
        return ("É Palíndromo");
    } else {
        return ("Não é Palíndromo");
    }
}

function ehSubconjunto (palavra1, palavra2){
    if ((palavra1 === "" || palavra1 === undefined) || (palavra2 === "" || palavra2 === undefined)){
        return ("Erro");
    } else {
        palavra1 = palavra1.toUpperCase().trim();
        palavra2 = palavra2.toUpperCase().trim();

        if (palavra1.includes(palavra2) === true){
            return ("É um subconjunto");
        } else{
            return ("Não é um subconjunto");
        }
    }
}

function diaSemana (ano, mes, dia){
    let data = new Date(dia, (mes - 1), ano);
    let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    return (diasSemana[data.getDay()]);
}