var mostra = function (frase) {
    document.write("<br>");
};

var totalIdadeDeFamiliares = prompt("Quantos familiares são?");
var somaDeIdade = 0;

var numero = 1;
while (numero <= totalIdadeDeFamiliares) {
    var idade = parseInt(prompt("Qual é a idade?"));
    somaDeIdade = somaDeIdade + idade;

    numero++;
}

var media = somaDeIdade / totalIdadeDeFamiliares;
alert("A média é: " + media);