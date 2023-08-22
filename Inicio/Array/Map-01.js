const Nums = [1, 2, 3, 4, 5];

//for com proposito.

let Resultado = Nums.map(function (e) {
    return e + 2;
});

console.log(Nums, Resultado);

const Soma = e => e + 10;
const Triplo = e => e * 3;
const ParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

Resultado = Nums.map(Soma).map(Triplo).map(ParaDinheiro);
console.log(Resultado);