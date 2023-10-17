const Escola = [{
    Nome: "Turma M1",
    Alunos: [{
        Nome: "Gustavo",
        Nota: 8.1
        
    },
    {
        Nome: "Maria",
        Nota: 9.3,
    }]
},{
    Nome:"Turma M2",
    Alunos:[{
        Nome:"Rebeca",
        Nota:8.9,
    },{
        Nome:"Roberto",
        Nota: 7.3
    }]
}]

const getNotaDoAluno = Alunos => Alunos.Nota;
const getNotasDaTurma = turma => turma.Alunos.map(getNotaDoAluno);
const getNomeDoAluno = turma => turma.Alunos.map(Aluno => Aluno.Nome); 

const Nomes = Escola.map(getNomeDoAluno)
const Notas = Escola.map(getNotasDaTurma);
console.log(Notas);
console.log(Nomes);

Array.prototype.flatMap = function(callback)
{
    return Array.prototype.concat.apply([], this.map(callback));
}
console.log();
const Notas2 = Escola.flatMap(getNotasDaTurma);
const Nomes2 = Escola.flatMap(getNomeDoAluno);
console.log(Notas2);
console.log(Nomes2);
