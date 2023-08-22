const Produtos = [
    {Nome: 'Notebook', Preco: 2499, Fragil: true},
    {Nome: 'iPad pro', Preco: 4199, Fragil: true},
    {Nome: 'Copo de Vidro', Preco: 12.49, Fragil: true},
    {Nome: 'Copo de Plástico', Preco: 18.99, Fragil: false}
];

console.log(Produtos.filter(function(p){
    return true
}));

console.log('------------------------------------------');
console.log(Produtos.filter(function(p) {
    if(p.Preco >= 500 && p.Fragil) {
        console.log(`
    Produtos Caros  

Produto: ${p.Nome}
Valor: ${p.Preco}
Fragil: ${p.Fragil}\n`);
    }
    else{
        console.log(`
    Produtos baratos

Produto: ${p.Nome}
Valor: ${p.Preco}
Fragil: ${p.Fragil}`);
    }
}));
console.log('------------------------------------------');
console.log(Produtos.filter(function(p) {
    return p.Preco >= 500 && p.Fragil;
}))