//Coleção dinâmica de pares Chaves/Valor.

const Produto = new Object;
Produto.Nome = 'Cadeira';
Produto['Marca do Produto'] = 'Generico';
Produto.Preço = 220

console.log(Produto);
delete Produto.Preço;
delete Produto['Marca do Produto'];
console.log();
console.log(Produto);

const Carro = {
    Modelo: 'A4',
    Valor: 89000,
    Proprietario: {
        Nome: 'Thiago',
        Idade: 20,
        Endereco: {
            logradouro: 'Rua ABC',
            Numero: 123
        }
    },
    Condutores:[{
        Nome: 'Soraya',
        Idade: 39,
    },
    {
        Nome: 'Jose',
        Idade: 43
    }],
    CalcularValorSeguro: function() {
        //......
    }
}

Carro.Proprietario.Endereco.Numero = 255;
Carro['Proprietario']['Endereco']['logradouro'] = 'Rua Florestopolis';



delete Carro.Condutores;
delete Carro.CalcularValorSeguro;
console.log(Carro);
//-------undefinesd------------//

console.log(Carro.CalcularValorSeguro)
console.log(Carro.Condutores);

