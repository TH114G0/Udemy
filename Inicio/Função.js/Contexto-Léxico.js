const valor = 'Global';//Varivael Global

function minhaFuncao() {
    //const valor = 'Local' //Variavel local de MinhaFuncao()
    console.log(valor);
}

function exec() {
    const Valor = 'Local'; //Variavel local de Exec()
    minhaFuncao();
}

exec();