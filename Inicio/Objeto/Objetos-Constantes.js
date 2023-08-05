//Pessoa -> Endereço de Memoria -> {....}
const Pessoa = {Nome: 'Pedro' }
Pessoa.Nome = 'Thiago';
console.log(Pessoa)

//Pessoa -> Endereço de Memoria difente do anterior -> {....}
//Pessoa = {Nome: 'Ana'} Atribuindo um novo objetivo com um endereço diferente. 

Object.freeze(Pessoa); //Não a possibilidades de alteração devido o congelamento do objeto

Pessoa.Nome = 'Ana'; //Não será feita a alteração devido o congelamento
Pessoa.end = 'Rua ABC'; //Não será adicionado nada ao objeto devido o congelamento
delete Pessoa.Nome; // Não Será deletado devido o congelamento.

console.log(Pessoa.Nome);
console.log(Pessoa);