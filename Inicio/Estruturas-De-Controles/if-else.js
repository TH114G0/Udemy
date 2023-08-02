const ImprimirNota = function(Nota) {
    if(Nota >= 7) { 
        console.log('Nota do aluno: '+ Nota + ', Aprovado.');
    } else {
        console.log('Nota do aluno: '+ Nota + ', Reprovado.');
    }
}

ImprimirNota(7);
ImprimirNota(6);
ImprimirNota('Epa')// Cuidado!!!