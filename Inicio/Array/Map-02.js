const Carrinho = [
    '{"Nome": "Borracha", "Preço": 3.45}',
    '{"Nome": "Caderno", "Preço": 13.90}',
    '{"Nome": "Kit de lapis", "Preço": 41.22}',
    '{"Nome": "Caneta", "Preço": 7.50}',
]

const ParaObjeto = json => JSON.parse(json);
const ApenasPreco = Produto => Produto.Preço;

const Resultado = Carrinho.map(ParaObjeto).map(ApenasPreco);
console.log(Resultado);