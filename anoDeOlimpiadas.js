var mostra = function (frase) {
    document.write(frase + "<br>");
};

var anoLimite = prompt("Qual é a olimpíada limite?");
var anoDeOlimpiadas = 1896;

while (anoDeOlimpiadas <= anoLimite) {
    mostra(anoDeOlimpiadas + " esse ano tem Olimpíada!");
    anoDeOlimpiadas = anoDeOlimpiadas + 4;
}

mostra("Eba, esses foram os anos de olimpíadas até " + anoLimite);