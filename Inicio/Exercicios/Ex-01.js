/*
    01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
    multiplicação e divisão desses valores.

*/ 

function Calculator(a, b) {
    
    this.Sum = () => {
        return console.log(`Result of the operation: ${a} + ${b} = ${a+b}`);
    }

    this.subtraction = () => {
        return console.log(`Result of the operation: ${a} - ${b} = ${a-b}`);
    }

    this.Multiplication = () => {
        return console.log(`Result of the operation: ${a} x ${b} = ${a*b}`);
    }

    this.Division = () => {
        return console.log(`Result of the operation: ${a} / ${b} = ${a/b}`);
    }

    this.getResult = () => {
        return console.log(`
            Result of the operations

            ${a} + ${b} = ${a+b}
            ${a} - ${b} = ${a-b}
            ${a} x ${b} = ${a*b}
            ${a} / ${b} = ${a/b}
        `);
    }
}

const Result = new Calculator(5, 5);
Result.Sum();
Result.subtraction();
Result.Multiplication();
Result.Division();
Result.getResult();