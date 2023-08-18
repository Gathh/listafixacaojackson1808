function seqFibonacci(){
        let num = Number(document.getElementById("num").value)
        let cont = 2
        let seqAtual = 1
        let seqAnterior = 0
        let seqProx = 0
    
        while(cont < num){
            seqProx = seqAtual + seqAnterior
            seqAnterior = seqAtual
            seqAtual = seqProx
    
            cont++
        }
        alert(seqProx)
    
    }