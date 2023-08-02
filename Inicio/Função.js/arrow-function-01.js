let dobro = function(a) {
    return a * 2;
}
console.log(dobro(10));

dobro = (a) => {
    return 2 * a
}

console.log(dobro(5));

dobro = a => 2 * a //Return implícito
console.log(dobro(15));

let ola = function() {
    return 'Hello, World!'
}
console.log(ola());

ola = () => 'Ola, Mundo';
console.log(ola());

ola = _ => 'Ola, Mundo 2';
console.log(ola());
