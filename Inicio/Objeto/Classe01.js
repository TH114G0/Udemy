class Lancamentos {
    constructor(Nome = 'Genérico', Valor = 0) {
        this.Nome = Nome;
        this.Valor = Valor; 
    }
}

class CicloFinanceiro {
    constructor(Mes, Ano) {
        this.Mes = Mes;
        this.Ano = Ano;
        this.Lancamentos = [];
    }

    addLancamentos(...Lancamentos) { //Essa função serve para adicionar elementos no Vetor "Lacamentos". 
        Lancamentos.forEach(l => this.Lancamentos.push(l)) //forEach percorre por todo o vetor. E atráves do método push ele adiciona em cada espaço do vetor que está vazio, os elementos passados como parametros.
        //Nesta ocasião o l receberá os parametros passados e em diante o this está fazendo referencia ao vetor de laçamentos e logo em seguida temos o método push que ira adiocionar os elementos no vetor.
    }

    Sumario() {
        let ValorConsolidado = 0;
        this.Lancamentos.forEach(l => {
            ValorConsolidado += l.Valor
        });
        return ValorConsolidado;
    }
}

const Salario = new Lancamentos('Salario', 45000);
const ContaDeLuz = new Lancamentos('Luz', -200);

const Contas = new CicloFinanceiro(8, 2023);
Contas.addLancamentos(Salario, ContaDeLuz);
console.log(Contas.Sumario());