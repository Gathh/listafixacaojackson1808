function tabelaMulti() {
    var num = Number(document.getElementById("numero").value);
    var primeiroNum = num
    var qtd = 1

    for (let i = 11; qtd < i; qtd++) {

        num = primeiroNum * qtd
        alert("Por " + qtd + ": " + num)

    }
}