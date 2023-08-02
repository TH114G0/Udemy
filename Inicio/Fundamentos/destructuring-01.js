// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 18,
    endereco: { 
        Logradouro: 'Rua abc',
        Numero: 1000
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n,i);

const {sobrenome, bemhumorada = true} = pessoa;
console.log(sobrenome,bemhumorada);

const {endereco: {Logradouro, Numero, cep} } = pessoa;
console.log(Logradouro, Numero, cep)