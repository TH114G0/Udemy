function teste1(valor) {
    if(valor > 7) 
        console.log(valor);//Apenas esse bloco de linha pertence ao if
    console.log('Final!');
    
}

teste1(6.0);
teste1(8.0);

function teste2(valor) {
    if(valor >7); {//Cuidado com o ';', não usar com as estruturas de controle
        console.log(valor);
    }
}

teste2(6);
teste2(8);