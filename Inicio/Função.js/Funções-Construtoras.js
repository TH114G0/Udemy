/*function Carro(VelocidadeMaxima = 200, Delta = 5) {
    //Atributo privado(Local)
    let VelocidadeAtual = 0;

    //Metodo Publico
    this.acelerar = function() {
        if(VelocidadeAtual + Delta <= VelocidadeMaxima) {
            VelocidadeAtual += Delta;
        } else {
            VelocidadeAtual = VelocidadeMaxima;
        }
    }

    //Metodo Publico
    this.getVelocidadeAtual = function() {
        return VelocidadeAtual;
    }
}

const uno = new Carro
uno.acelerar();//5
uno.acelerar();//5
uno.acelerar();//5
uno.acelerar();//5
uno.acelerar();//5
uno.acelerar();//5
console.log(uno.getVelocidadeAtual());//30
////////////////////////////////////////////////
const Ferrari = new Carro(350, 50);
Ferrari.acelerar();//50
Ferrari.acelerar();//50
Ferrari.acelerar();//50
Ferrari.acelerar();//50
console.log(Ferrari.getVelocidadeAtual());*/

const Carro = function(VelocidadeMaxima = 200, Delta = 15) {
    let VelocidadeAtual = 0;

    this.Acelerar = () => {
        if(VelocidadeAtual + Delta <= VelocidadeMaxima) {
            VelocidadeAtual += Delta;
        } else {
            VelocidadeAtual = VelocidadeMaxima;
        }
    }

    this.getVelocidadeAtual = () => {
        return VelocidadeAtual;
    }
}

const Uno = new Carro();
Uno.Acelerar();
Uno.Acelerar();
Uno.Acelerar();
Uno.Acelerar();
console.log(Uno.getVelocidadeAtual());

const Ferrari = new Carro(VelocidadeMaxima = 450, Delta = 50);
Ferrari.Acelerar();
Ferrari.Acelerar();
Ferrari.Acelerar();
Ferrari.Acelerar();
console.log(Ferrari.getVelocidadeAtual());