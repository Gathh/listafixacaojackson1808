function somaPares() {
    var par = 0
    var soma = 0
    var contador = 0

    do {
        if (par % 2 === 0) {
            soma = par + soma
            par ++
        } else{
            par ++
        }
        contador ++
    } while (contador <= 50);
    alert("A soma de todos os números pares, até 50, é: "+ soma)
}