var numeroPensado = Math.round(Math.random() * 100);

var numeroDaTentativa = 1;
while (numeroDaTentativa <= 3) {
    var chute = prompt("Qual número você acha que é?");

    if (chute == numeroPensado) {
        alert("Parabéns você acertou!");
        break;
    } else {
        alert("Ops, você errou. Será que ainda tem mais tentativas?");

        if (chute <= numeroPensado) {
            alert("Você tem mais " + numeroDaTentativa);
        } else {
            alert("Você tem mais " + numeroDaTentativa)
        }
    }

    numeroDaTentativa++;
}