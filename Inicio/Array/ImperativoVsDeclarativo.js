const Alunos = [
    {Nome: "João", Nota: 7.9},
    {Nome: "Maria", Nota: 9.2}
]


//Imperativo
let total1 = 0;
for(let i = 0; i < Alunos.length; i++)
{
    total1 += Alunos[i].Nota;//Aqui acontece a soma. 7.9 + 9.2 = 17,1.
}
console.log(total1 / Alunos.length);//Aqui acontece a divisão. 17,1 / 2(tamanho do vetor) = 8.55.

//Declarativo

const GetNota = Alunos => Alunos.Nota;
const soma = (total, atual) => total + atual;
const total2 = Alunos.map(GetNota).reduce(soma);
/*map cria um novo array somente com as notas de aluno, em seguida, estamos usando a função reduce para calcular a soma 
de todas as notas no novo array gerado pelo map. A função soma é usada como um callback para a função reduce, e ela está somando os valores acumulados (total) com o valor atual em cada iteração.*/
console.log(total2 / Alunos.length);

