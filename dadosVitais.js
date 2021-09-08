var pulaLinha = function () {
    document.write("<br>");
};

var calculaDiasDeVida = function (idade) {
    var dias = idade * 365;
    return dias;
};

var calculaBatimentos = function (dias) {
    var batimentos = dias * 24 * 60 * 80; // multiplicando o numeros de dias de vidas por 24 horas, e para cada hora vezes 60 minutos, e para cada minuto considerando 80 batimentos cardiacos
    return batimentos;
};

var idade = prompt("Quantos anos você tem?");
var dias = calculaDiasDeVida(idade);
var batimentos = calculaBatimentos(dias)
document.write("Você já viveu" + dias + "dias de vida." + "E seu coração já bateu " + batimentos + " vezes. Haja coração!");

