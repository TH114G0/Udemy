Array.prototype.filter2 = function(callback) { 
    const NewArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            NewArray.push(this[i]);
        }
    }
    return NewArray
}

const Produtos = [
    {Nome: 'Notebook', Preco: 2499, Fragil: true},
    {Nome: 'iPad pro', Preco: 4199, Fragil: true},
    {Nome: 'Copo de Vidro', Preco: 12.49, Fragil: true},
    {Nome: 'Copo de Plástico', Preco: 18.99, Fragil: false}
];

const Caro = produto => produto.Preco >= 500;
const Fragil = produto => produto.Fragil;

console.log(Produtos.filter2(Caro).filter2(Fragil))