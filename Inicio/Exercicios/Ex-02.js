/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function Triangle(a, b, c) {

    this.ResultTriangule = () => {

        if(a && b == c) {
            return console.log(`Equilateral`);
        } else if(a == b && b != c) {
            return console.log(`Isosceles`);
        } else if(a != b != c) {
            return console.log(`Scalene`);
        }
        else {
            return console.log("It's not a Triangle");
        }
    }
}
const Result = new Triangle(2,2,2)
Result.ResultTriangule();