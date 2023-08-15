function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

/////////////////////Comparações//////////////
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);
//////////////////////////////////////////////

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}
//////////////////
console.log();
obj1.falar();
obj1.nome = 'Obj1';
obj1.falar();
/////////////////
console.log();
obj2.falar();
obj2.nome = 'Obj2'
obj2.falar();
/////////////////
console.log();
//Criando objeto e colocando manualmente a atribuição ao MeuObjeto.prototype
const Obj3 = {}
Obj3.__proto__ = MeuObjeto.prototype;
Obj3.falar();
Obj3.nome = 'Obj3';
Obj3.falar();
///////////////////////////////
console.log('\nFazendo comparações\n');
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);