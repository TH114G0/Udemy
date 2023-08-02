const Fabricantes = ['Mercedes', 'Audi', 'BMW'];

const Imprimir = function(nome, indice) {
    console.log(`${indice +1}) - ${nome}`);
}

Fabricantes.forEach(Imprimir);
console.log('');
Fabricantes.forEach(Fabricantes => console.log(Fabricantes));
//////////////////////////////////////////////////////////////
const nome = ['Thiago', 'Ana', 'Maria', 'Pedro'];

const ImprimirNome = function(Nome) {
    console.log(`${Nome}`);
}
console.log('');
nome.forEach(ImprimirNome);