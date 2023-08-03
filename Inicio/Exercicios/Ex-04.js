/*
    04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
    e o resto da divisão destes dois valores.
*/

function Calcular(Dividendo, Divisor) {
    
    this.Divisao = () => {
        return console.log(`Resultado da divisão entre ${Dividendo} / ${Divisor} = ${Dividendo / Divisor}`);
    }

    this.RestoDaDivisao = () => {
        return console.log(`O resto da divisão entre ${Dividendo} % ${Divisor} = ${Dividendo % Divisor}`);
    }

    this.Resultado = () => {
        return console.log(`
                                Resultado das operações

            Resultado da divisão entre ${Dividendo} / ${Divisor} = ${Dividendo / Divisor}
            O resto da divisão entre ${Dividendo} % ${Divisor} = ${Dividendo % Divisor}
        `)
    }
}

const Resultado = new Calcular(12, 6);
//Resultado.Divisao();
//Resultado.RestoDaDivisao();
Resultado.Resultado();