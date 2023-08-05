const a = 1;
const b = 2;
const c = 3;
//Primeira opção;
const obj1 = {a:a, b:b, c:c};
console.log(obj1);
//Segunda opção
const obj2 = {a, b, c};
console.log(obj2);


//Criar um obj dinamicamente
//Primeira opção
const NomeAttr = 'Nota';
const ValorAttr = 7.87;

const obj3 = {};
obj3[NomeAttr] = ValorAttr;
console.log(obj3);

//Segunda opção
const obj4 = {[NomeAttr]: ValorAttr};
console.log(obj4);


//Maneiras de criar funções em objetos
const obj5 = {
    funcao: function() {
        //......
    },
    funcao2() {
        //.....
    }
}

console.log(obj5);