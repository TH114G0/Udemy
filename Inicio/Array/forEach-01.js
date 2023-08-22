const Aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

Aprovados.forEach((Nome, Indice)=> {
    console.log(`${Indice +1}) ${Nome}`);
});
console.log('--------------------------------');
Aprovados.forEach(Nome => console.log(Nome));
console.log('--------------------------------');
const ExibirAprovados = Aprovados => console.log(Aprovados);
Aprovados.forEach(ExibirAprovados);