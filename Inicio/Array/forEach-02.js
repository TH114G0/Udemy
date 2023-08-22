const Aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

Aprovados.forEach((Nome, Indice)=> {
    console.log(`${Indice +1}) ${Nome}`);
});
/////////////////////////////////////////////////////////////////////

console.log('-----------------------------------------');
const forEach2 = Aprovados;
for(let Indice = 0; Indice < forEach2.length; Indice++) {
    console.log(`${Indice+1}) ${forEach2[Indice]}`);
}
/////////////////////////////////////////////////////////////////////

console.log('-----------------------------------------');
Array.prototype.forEach3 = function(callback) { 
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}  

Aprovados.forEach3((Nome, Indice)=> {
    console.log(`${Indice +1}) ${Nome}`);
});