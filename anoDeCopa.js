var mostra = function (frase) {
    document.write(frase + "<br>");
};
var anoLimite = prompt("Qual é o ano limite?");
var anoComTexto = prompt("Informe o ano inicial?");
var anoDeCopa = parseInt(anoComTexto);

while (anoDeCopa <= anoLimite) {
    mostra(anoDeCopa + " é ano de copa!");
    anoDeCopa = anoDeCopa + 4 + anoDeCopa;
}

mostra("Ufa! Esses foram os anos de copa até " + anoLimite);