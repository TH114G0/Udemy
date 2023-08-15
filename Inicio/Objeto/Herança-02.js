/*Object.prototype.Attr0 = '0' //Não faça isso em casa.

const Avo = {Attr1: 'Avo = A'};
const Pai = {__proto__:Avo, Attr2: 'Pai = B'};
const Filho = {__proto__:Pai, Attr3: 'Filho = C'};
console.log(Filho.Attr0 +'\n'+ Filho.Attr1 +'\n'+ Filho.Attr2 +'\n'+ Filho.Attr3);
//-------------------------------------------------------------------------------//
const Carro = {
    VelAtual: 0,
    VelMAx: 200,
    Acelerar(Delta) {
        if(this.VelAtual + Delta <= this.VelMAx) {
            this.VelAtual += Delta;
        }else {
            this.VelAtual = this.VelMAx;
        }
    },
    
    Status() {
        return `${this.VelAtual}Km/h de ${this.VelMAx}Km/h`;
    }
}

const Ferrari = {
    Modelo: 'F40',
    VelMAx: 350,
    Status() {
        return `${this.Modelo}: ${super.Status()}`
    }
}

const Volvo = {
    Modelo: 'V40',
    Status() {
        return `${this.Modelo}: ${super.Status()}`
    }
}

Object.setPrototypeOf(Ferrari, Carro);
Object.setPrototypeOf(Volvo, Carro);
console.log();
console.log('Ferrari '+Ferrari.Status());
Ferrari.Acelerar(250);
console.log('Ferrari '+Ferrari.Status());
console.log('Volvo '+Volvo.Status());
Volvo.Acelerar(100);
console.log('Volvo '+Volvo.Status());
*/

const Avo = { Attr1: 'Avo = A' };
const Pai = { __proto__:Avo, Attr2: 'Pai = B' };
const Filho = { __proto__:Pai, Attr3: 'Filho = C' };
console.log(Filho.Attr1 +'\n'+ Filho.Attr2 +'\n'+ Filho.Attr3);

const Carro = {
    VelMin: 0,
    VelMax: 200,

    Acelerar(Delta) {
        if(this.VelMin + Delta < this.VelMax) {
            this.VelMin += Delta;
        } else {
            this.VelMin = this.VelMax;
        }
    },

    Status() {
        return `${this.VelMin}Km/h de ${this.VelMax}Km/h`;
    }
}

const Ferrari = {
    VelMax: 375,
    Modelo: 'F40',
    Status() {
        return `${this.Modelo}: ${super.Status()}`
    }
}

const Volvo = {
    Modelo: 'V10',
    VelMax: 250,
    Status() {
        return `${this.Modelo}: ${super.Status()}`
    }
}

Object.setPrototypeOf(Ferrari, Carro);
Object.setPrototypeOf(Volvo, Carro);

Ferrari.Acelerar(200);
console.log(Ferrari.Status());
Volvo.Acelerar(180);
console.log(Volvo.Status());