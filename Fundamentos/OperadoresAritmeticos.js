const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log('-------------Soma-------------------\n'); 
console.log(`\tResultado da soma entre ${a} + ${b} + ${c} + ${d} = ${soma}\n`);
console.log('-------------Subtração--------------\n');
console.log(`\tResultado da subtração entre ${d} - ${b} = ${subtracao}\n`);
console.log('-------------Multiplicação-----------\n');
console.log(`\tResultado da multiplicação entre ${a} x ${b} = ${multiplicacao}\n`);
console.log('-------------Divisão----------------\n');
console.log(`\tResultado da divisão entre ${d} / ${a} = ${divisao}\n`);
console.log('-------------Modulo-----------------\n');
console.log(`\tResultado do modulo entre ${a} % 2 = ${modulo}`);
