const Pessoa = {
    Nome:'Thiago',
    Idade:20,
    Peso: 76
}
console.log(Pessoa);
console.log(Object.keys(Pessoa)); //Obtem o nome dos Atributos criados no objeto Pessoa.
console.log(Object.values(Pessoa));//Obtem o valor atribuido aos atributos.
console.log(Object.entries(Pessoa)); //Faz a impressão de atributo e valor em formato de array contendo 2 elementos cada(Chave e Valor).

Object.entries(Pessoa).forEach(([Chave, Valor]) => {
    console.log(`${Chave}: ${Valor}`);
});

Object.defineProperty(Pessoa, 'DataDeNascimento', {
    enumerable: true, //True ficará visivel, False ficará invisivel 
    writable: false, // False não poderá ser modificado, true poderá ser modificado
    value: '27/04/2003'
});
Pessoa.DataDeNascimento = '00/00/0000'//Não será atribuido nem um valor ao atributo DataDeNascimento pois está como um atributo writable que não é Gravável
console.log(Pessoa.DataDeNascimento);
console.log(Object.keys(Pessoa));
console.log(Object.entries(Pessoa));

const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
const obj = Object.assign(dest, o1, o2);//Dest será o Object que receberá os demais após a virgula. Então todos os valores após a virgula serão atribuidos a dest
console.log(dest);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);;