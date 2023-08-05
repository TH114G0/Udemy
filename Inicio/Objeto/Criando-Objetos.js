// Usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);


//Funções construtoras 
function Produto(Nome, Preco, Desconto) {
    this.Nome = Nome;

    this.getPrecoComDesconto = () => {
        return Preco * (1 - Desconto);
    }
}
const CasaDecimais = 2
const Caneta = new Produto('Caneta', 7.99, 0.15);
const Computador = new Produto('Notebook', 2998.99, 0.25)
console.log('Valor da caneta: R$'+Caneta.getPrecoComDesconto().toFixed(CasaDecimais).toString().replace(".", ","),
'\nValor do Notebook: R$'+Computador.getPrecoComDesconto().toFixed(CasaDecimais).toString().replace(".", ","));

//Função Factort
function CriarFuncionario(Nome, SalarioBase, Faltas) {
    return {
        Nome,
        SalarioBase,
        Faltas,
        GetSalario() {
            return (SalarioBase / 30) * (30 - Faltas)
        }
    }
}

const F1 = CriarFuncionario('Thiago', 12560, 2);
const F2 = CriarFuncionario('João', 4480, 5);
console.log('\n'+F1.Nome+'\nSalário: R$'+F1.GetSalario().toFixed(CasaDecimais).toString().replace(".",","), 
'\n\n'+F2.Nome+'\nSalário: R$'+F2.GetSalario().toFixed(CasaDecimais).toString().replace(".",","));

//Object.create
console.log();
const Filha = Object.create(null);
Filha.nome = 'Ana';
console.log(Filha);

// Um função famosa que retorna Objeto.....
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);