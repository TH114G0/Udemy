const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    Nome: 'Thiago',
    SobreNome: 'Jose',
    Idade: 20,
    Peso: 76,
    Altura: 1.71
}

for(let Atributo in pessoa) {
    console.log(`${Atributo} = ${pessoa[Atributo]}`);
}