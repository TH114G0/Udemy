/*const Notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8];
// Sem callback
const NotasBaixas1 = [];

for(i in Notas) {
    if(Notas[i] < 7){
        NotasBaixas1.push(Notas[i]);
    }
}
console.log(NotasBaixas1);
/////////////////////////////////////////////////////////
//Com callback
const NotasBaixas2 = Notas.filter(function (nota) {
    return nota < 7;
});
console.log(NotasBaixas2);
/////////////////////////////////////////////////////////
const notaMenorQue7 = nota => nota < 7;
const NotasBaixas3 = Notas.filter(notaMenorQue7);
console.log(NotasBaixas3);
*/

const Notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8];

const NotasBaixas1 = [];
for(i in Notas) {
    if(Notas[i] < 7) {
        NotasBaixas1.push(Notas[i]);
    }
}

console.log(NotasBaixas1);

const NotasBaixas2 = Notas.filter(function(Notas) {
    return Notas < 7;
});

console.log(NotasBaixas2);

const NotasBaixas3 = Notas.filter((notas)=> {
    return notas < 7;
});

console.log(NotasBaixas3);

const nomes = ['Thiago', 'Ana', 'Pedro', 'João'];

const Console = nomes.filter(function(nome) {
    return nome;
})

console.log(Console);

const Console1 = nomes.filter((nome)=> {
    return nomes;
});

console.log(nomes);