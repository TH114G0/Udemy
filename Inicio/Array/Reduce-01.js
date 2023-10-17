const Alunos = [
    {Nome: 'João', Nota: 7.3, Bolsista: false},
    {Nome: 'Maria', Nota: 9.2, Bolsista: true},
    {Nome: 'Pedro', Nota: 9.8, Bolsista: false},
    {Nome: 'Ana', Nota: 8.7, Bolsista: true},
]

console.log(Alunos.map(a => a.Nota));
console.log('----------------------')
const Resultado = Alunos.map(a => a.Nota).reduce(function(Acumulador, Atual) {
    console.log(Acumulador, Atual);
    return Acumulador + Atual;
},);

console.log(`Resultado final da soma de todos os elementos do array = `+Resultado);

///////////////
console.log('\n\nExemplo mais simplificado');

const Number = [2, 2, 2, 2, 2];
const SomaReduce = function(Acumulado, ProxNum) {
    console.log(`
    Acumaludado: ${Acumulado}
    Valor somado com: ${ProxNum}`);
    return Acumulado + ProxNum;
} 

console.log(`\nResultado final da soma de todos os elementos do array = `+Number.reduce(SomaReduce));