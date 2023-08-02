function SoNotaBoa(nota) {
    if(nota >= 7){
        console.log('Aprovado', nota);
    }
}

SoNotaBoa(8.1);
SoNotaBoa(6.0);

function SeForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade', valor);
    }
}

SeForVerdadeEuFalo();//False
SeForVerdadeEuFalo(null);//False
SeForVerdadeEuFalo(undefined);//False
SeForVerdadeEuFalo(NaN);//False
SeForVerdadeEuFalo('');//False
SeForVerdadeEuFalo(0);//False
SeForVerdadeEuFalo(-1);//True
SeForVerdadeEuFalo([]);//True
SeForVerdadeEuFalo([1,2]);//True
SeForVerdadeEuFalo(' ');//True
SeForVerdadeEuFalo({});//True
SeForVerdadeEuFalo('?')//True