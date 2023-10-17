const Alunos = [
    {Nome: 'João', Nota: 7.3, Bolsista: false},
    {Nome: 'Maria', Nota: 9.2, Bolsista: true},
    {Nome: 'Pedro', Nota: 9.8, Bolsista: false},
    {Nome: 'Ana', Nota: 8.7, Bolsista: true},
];
// Desafio 1: Todos os alunos são bolsistas ?
const TodosBolsistas = (Resultado, Bolsista) => Resultado && Bolsista;
console.log(Alunos.map(a => a.Bolsista).reduce(TodosBolsistas));

//Desafio 2: Algum aluno é bolsistas?
const AlgumBolsista = (Resultado, Bolsista) => Resultado || Bolsista;
console.log(Alunos.map(a => a.Bolsista).reduce(AlgumBolsista));