/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos

    */
function JurosSimpleEComposto(JurosSimples, JurosCompoto) {
    
    this.JurosSimples = () => {
        let Rendimento;
        console.log(`O rendimento de R$1200,00, aplicado a juros simples, com a taxa de 2% ao mês, 
no final de 1 ano e 3 meses o valor será = R$${Rendimento = (JurosSimples * 0.02 * 15)}. O valor total será R$${JurosSimples + Rendimento}.
        `);
    }

    this.JurosCompoto = () => {
        let Juros = 0;
        let Resultado = JurosCompoto;
        for(let Meses = 0; Meses < 3; Meses++) {
            Juros += ((Resultado + Juros) * 0.1);
        }
        console.log(`Uma aplicação de R$10.000, no regime de juros composto, é feita por 3 meses a juros de 10% ao mês
que é = R$${Juros}. Qual valor que será resgatado ao final do período ? R$${JurosCompoto + Juros}`);
    }
    
}

const Resultado = new JurosSimpleEComposto(1200,10000)
Resultado.JurosSimples();
Resultado.JurosCompoto();