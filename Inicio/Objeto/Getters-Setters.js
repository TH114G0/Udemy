const Sequencia = {
    _Valor: 1,//Convesão
    get Valor() {return this._Valor++},
    set Valor(Valor) {
        if(Valor > this._Valor) {
            this._Valor = Valor;
        }
    },
}

console.log(Sequencia.Valor, Sequencia.Valor);
Sequencia.Valor = 1000;
console.log(Sequencia.Valor, Sequencia.Valor);
Sequencia.Valor = 900; //Ignora o 900, pois só havera o incremento se o número atual for maior que o anterior.
console.log(Sequencia.Valor, Sequencia.Valor);