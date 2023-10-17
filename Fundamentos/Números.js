const peso1 = 1.0;
const peso2 = Number('2.0');//Conversão de string para número

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));//Confirmando se o valor é um número inteiro.
console.log(Number.isInteger(peso2));//Confirmando se o valor é um número inteiro.

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));//toFixed faz à alteração na quantidade de casas decimais.
console.log(media.toString());//toString faz à conversão de um valor number para string. Porém quando é passado um valor dentro dos parênteses é convertido em números binários.

console.log(typeof media);