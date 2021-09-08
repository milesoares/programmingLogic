var pulaLinha = function () {
    document.write("<br>");
};

var mostra = function (frase) {
    document.write(frase);
    pulaLinha();
};

var calculaIMC = function (altura, peso) {
    var imc = peso / (altura * altura);
    return imc;
};

var alturaDoUsuario = prompt("Bom dia! Qual a sua altura?");
var pesoDoUsuario = prompt("E o seu peso?");

var imcDoUsuario = calculaIMC(alturaDoUsuario, pesoDoUsuario);
mostra("O seu IMC é " + imcDoUsuario);

if (imcDoUsuario >= 18.5 && imcDoUsuario <= 35) {
    mostra("OK! Seu IMC está entre os dois limites.");
}




