function Aula(Nome, VideoID) {
    this.Nome = Nome;
    this.VideoID = VideoID;
}

const Aula1 = new Aula('Bem-Vindo', 123);
const Aula2 = new Aula('Até breve', 456); 
console.log(Aula1, Aula2); 

//Simulador do Operador new
function Novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
} 

const Aula3 = Novo(Aula, 'Bem-Vindo', 123);
const Aula4 = Novo(Aula, 'Até Breve', 456);