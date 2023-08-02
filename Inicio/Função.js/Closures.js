const x = 'Global';


function Fora() {
    const x = 'Local';
    function Dentro() {
        return x;
    }
    return Dentro;
};

const MinhaFuncao = Fora();
console.log(MinhaFuncao());