const Alunos = [
    {Nome: "João", Nota: 7.9},
    {Nome: "Maria", Nota: 9.2}
]

let total1 = 0;
for(let i = 0; i < length.Alunos; i++)
{
    total1 += Alunos[i].Nota;
}

console.log(total1 / Alunos.length);