/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/


// Definição da função calcularBhaskara que recebe três parâmetros: ax2, bx e c
function calcularBhaskara(ax2, bx, c) {
    // Calcula o discriminante da equação quadrática
    var delta = bx**2 - 4*ax2*c;
    
    // Verifica se o discriminante é negativo
    if (delta < 0) {
        // Se o discriminante for negativo, retorna a mensagem "Delta é negativo"
        return "Delta é negativo";
    }
    
    // Calcula as duas raízes usando a fórmula de Bhaskara
    var x1 = (-bx + Math.sqrt(delta)) / (2*ax2);
    var x2 = (-bx - Math.sqrt(delta)) / (2*ax2);
    
    // Retorna as raízes em um array
    return [x1, x2];
}

// Teste da função com os valores da equação 3x² - 5x + 12
var ax2 = 3;
var bx = -5;
var c = 12;
var resultado = calcularBhaskara(ax2, bx, c);

// Imprime o resultado no console
console.log(resultado);