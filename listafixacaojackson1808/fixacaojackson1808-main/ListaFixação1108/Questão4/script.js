function verificaPrimo() {
    var num = Number(document.getElementById("numero").value);
    var primos = 0;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primos++;
            break; 
        }
    }

    if (primos !== 0 || num <= 1) {
        alert("Esse número não é primo!");
    } else {
        alert("Esse número é primo!");
    }
}
