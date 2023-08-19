const Produto = Object.preventExtensions({
    Nome: 'Qualquer', Preco: 1.99, Tag:'Promoção'
});

console.log('Extensivel:', Object.isExtensible(Produto));

console.log('\nSem modificação');
console.log(Produto);
/////////////////////Modificando//////////////////
Produto.Nome = 'Borracha';
Produto.Descricao = 'Borracha Escolar Branca';
delete Produto.Tag;
//////////////////////////////////////////////////
console.log("\nPós modificação");
console.log(Produto);


// Object.Seal
console.log('\n\n///////////////////////////////////////////////\n\n');
const Pessoa = {nome:'Juliana', Idade: 35}
Object.seal(Pessoa);
console.log('Selado: ',Object.isSealed(Pessoa));


console.log('\nSem modificação');
console.log(Pessoa);
////////////////////////////////
Pessoa.Sobrenome = 'Silva';
delete Pessoa.nome;
Pessoa.Idade = 21;
///////////////////////////////
console.log("\nPós modificação");
console.log(Pessoa);

console.log('\n\n///////////////////////////////////////////////\n\n');

//Object.freeze = Selado + Valores constantes.