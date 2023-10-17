//Par Nome/Valor
const Saudacao = 'Opaa!'; // Contexto léxico 1

function exec() {
    const Saudacao = 'Falaa!!'// Contexto léxico 2
    return Saudacao;
}

//Objetos são grupos aninhados de pares Nome/Valor
const Cliente = {
    Nome: 'Thiago',
    Idade: 20,
    Peso: 78,
    Endereco: {
        Logradouro: 'Rua muito legal',
        Numero: 123
    }
}

console.log(Saudacao);
console.log(exec());
console.log(Cliente);