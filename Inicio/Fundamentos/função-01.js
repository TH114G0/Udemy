//Função sem retorno
function ImprimirSoma(a, b){
    console.log(a + b);
}

console.log('------------Função sem retorno!----------------');
ImprimirSoma(2,3);
ImprimirSoma(2);
ImprimirSoma(2,5);
ImprimirSoma();

//Função com retorno 

function Soma(a, b = 1) {
    return a + b;
}
console.log('------------Função com retorno!----------------');
console.log(Soma(2, 3));
console.log(Soma(2));
console.log(Soma());
