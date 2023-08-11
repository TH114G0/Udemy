const Pai = {Nome: 'Thiago', CorDoCabelo: 'Castanho Escuro'};

const Filha1 = Object.create(Pai);
Filha1.Nome = 'Ana'
console.log('Nome: '+Filha1.Nome+', Cor do cabelo: '+ Filha1.CorDoCabelo);

const Filha2 = Object.create(Pai, { 
    Nome: {value: 'Bia', writable: false, enumerable: true }
});

console.log(Filha2.Nome);
Filha2.Nome = 'Carla' // Não será alterado por causa da opção writable está desativa.
console.log(`Nome: ${Filha2.Nome}, Cor do cabelo: ${Filha2.CorDoCabelo}`);

console.log();
//Atributos dos objetos.
console.log(Object.keys(Filha1));
console.log(Object.keys(Filha2));
console.log();
for(let key in Filha1) {
    Filha2.hasOwnProperty(key) ? //Aqui fará a verificação dos atributos criados nos objetos e de atributos herdados.
        console.log(`Criado em seus proprios objetos: `+key) : console.log(`Por herença: ${key}`)
}
console.log();
for(let key in Filha2) {
    Filha2.hasOwnProperty(key) ? //Aqui fará a verificação dos atributos criados nos objetos e de atributos herdados.
        console.log(`Criado em seus proprios objetos: `+key) : console.log(`Por herença: ${key}`)
}