let valor; //não inicializado;
console.log(valor);

valor = null; // ausência de valor
//sempre adicione null caso queira zerar o valor de uma variável 
console.log(valor);
//console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir o undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null; //sem preço 
