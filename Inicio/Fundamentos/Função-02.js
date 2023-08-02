//Armazenando uma função dentro de uma váriavel.

const ImprimirSoma = function(a, b){ //Criando uma função anônima = Função sem nome. 
    console.log(a + b);
}

console.log('Armazenando uma função dentro de uma váriavel.')
ImprimirSoma(2 ,3);

//Armazenando uma função array em uma váriavel.
const soma = (a, b) => {
    return a + b;
}

console.log('\nArmazenando uma função array em uma váriavel.')
console.log(soma(2, 3));

const subtracao = (a, b) => a - b
console.log("\nRetorno implicito");
console.log(subtracao(3,2));


const Imprimir02 = a => console.log(a);
Imprimir02('Legal!!')