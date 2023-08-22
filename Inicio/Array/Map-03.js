Array.prototype.map2 = function(callback) {
    const NewArray = [];
    for(i = 0; i < this.length; i++) {
        NewArray.push(callback(this[i], i, this));
    }
    return NewArray;
}

const Carrinho = [
    '{"Nome": "Borracha", "Preço": 3.45}',
    '{"Nome": "Caderno", "Preço": 13.90}',
    '{"Nome": "Kit de lapis", "Preço": 41.22}',
    '{"Nome": "Caneta", "Preço": 7.50}',
]

const ParaObjeto = json => JSON.parse(json); 
const ApenasPreco = Produto => Produto.Preço;

const Resultado = Carrinho.map(ParaObjeto).map2(ApenasPreco);
console.log(Resultado);