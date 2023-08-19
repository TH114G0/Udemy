class Avo {
    constructor(Sobrenome = 'Sousa', Profissão = "Pedreiro") {
        this.Sobrenome = Sobrenome;
        this.Profissão = Profissão;
    }
}

class Pai extends Avo {
    constructor(Sobrenome, Profissão = "Professor") {
        super(Sobrenome);
        this.Profissão = Profissão;
    }
}

class Filho extends Pai {
    constructor(Sobrenome = "Silva", Profissão = "Programador") {
        super("Silva");
        this.Profissão = Profissão;
    }
}

const avo = new Avo;
console.log(avo);
////////////////////
const pai = new Pai;
console.log(pai);
////////////////////
const filho = new Filho;
console.log(filho);