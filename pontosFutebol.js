var pulaLinha = function () {
    document.write("<br>");
};

var mostra = function (frase) {
    document.write(frase);
    pulaLinha();
};

var vitorias = prompt("Quantos jogos o CDC Futebol Clube venceu?");
var empates = prompt("Quantos jogos o CDC Futebol Clube empatou?");
var derrotas = prompt("Quantos jogos o CDC Futebol Clube perdeu?");

var calculaPontos = function (vitorias, empates) {
    return (vitorias * 3) + parseInt(empates) + (derrotas - 1);
};

if (vitorias > 28) {
    mostra("Nosso time está indo MELHOR que o adversario");
}

if (derrotas < 28) {
    mostra("Nosso time está indo PIOR que o adversario");
}

if (empates == 28) {
    mostra("Nosso time está indo EMPATADO que o adversario");
}