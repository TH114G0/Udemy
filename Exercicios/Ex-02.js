/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function Triangle(a, b, c) {

    if(a == b && b == c) {
        if(a==0 && b==0 && c == 0) {
            return "It's not a Triangle"
        }
        return `Equilateral`
        } 
        else if(a == b || c == b || a == c) {
            return 'Isosceles'
        } 
        else if(a != b || c != b || a != c) {
            return 'Scalene';
        }
        else {
            return "It's not a Triangle"
    }
}
console.log(Triangle(2,2,2));
console.log(Triangle(2,3,3));
console.log(Triangle(2,4,6));
console.log(Triangle(0,0,0));
