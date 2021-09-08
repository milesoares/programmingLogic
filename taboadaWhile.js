var mostra = function (frase) {
    document.write(frase + "<br>");
};

var multiplicador = 1;
while (multiplicador <= 10) {
    mostra("7 vezes " + multiplicador + "é igual a " + 7 * multiplicador);
    multiplicador = multiplicador + 1;
}
