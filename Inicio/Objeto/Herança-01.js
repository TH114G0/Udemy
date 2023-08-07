const Ferrari = { 
    Modelo: 'F40',
    VelMax: 350
}

const Volvo = {
    Modelo: 'V40',
    VelMax: 200
}

console.log(Ferrari.__proto__);
console.log(Ferrari.__proto == Object.prototype);
console.log(Volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto == null);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);