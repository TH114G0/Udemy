const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10; //Um novo espaço no vetor e atribuindo o valor 10
console.log(valores[4]);
console.log(valores.length);//Tamanho do vetor

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());//Remove o ultimo elemento do vetor 
console.log(valores);
delete valores[0]; //exclui o valor do indice 0
console.log(valores);

console.log(typeof valores)