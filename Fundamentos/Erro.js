function TratarErroELancar(erro) {
    throw new Error('...');
    //throw 10;
    //throw true;
   //throw 'mensagem';
}

function ImprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    }   catch (e) {
        TratarErroELancar(e)
    } finally {
        console.log('Fim.');
    }
}

const obj = {nome: 'Thiago'}
ImprimirNomeGritando(obj);