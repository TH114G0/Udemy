const soma = function(a, b) {
    return a + b;
}

const ImprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

ImprimirResultado(3, 4);
ImprimirResultado(3, 5, soma);
ImprimirResultado(3, 4, function(y, x){
    return y - x;
});
ImprimirResultado(3, 4,(x, y)=> {
    return x * y;
})

const Pessoa = {
    Nome:'Thiago',
    Falar: function(){
        console.log('Olá '+ this.Nome);
    }
}

Pessoa.Falar();