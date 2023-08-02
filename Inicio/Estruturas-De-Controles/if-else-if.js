Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim;
}

const ImprimirNota = function(Nota) {
    if(Nota.entre(9, 10)) {
        console.log('Quadro de Honra\nNota final: ',Nota+'.\n');
    } else if(Nota.entre(6, 8)) {
        console.log('Aprovado\nNota final: ',Nota+'.\n');
    }
    else if(Nota.entre(4, 5)) {
        console.log('Recuperação\nNota final: ',Nota+'.\n');
    }
    else if(1, 3) {
        console.log('Reprovado\nNota final: ',Nota+'.\n');
    }
    else {
        console.log('Nota inválida');
    }
}

ImprimirNota(10);
ImprimirNota(8);
ImprimirNota(5);
ImprimirNota(2);
ImprimirNota(0);