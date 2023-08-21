const QuaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(QuaseArray);
Object.defineProperty(QuaseArray, 'toString', {
    value: function() {return Object.values(this) }, enumerable: false
});

console.log(QuaseArray[0]);

const MeuArray = ['Rafael', 'Ana', 'Bia'];
console.log(QuaseArray.toString(), MeuArray);