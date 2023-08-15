console.log(typeof String);
console.log.apply(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() { //Está função faz com todos os elementos sejão invertidos 
    return this.split('').reverse().join(''); 
    //split faz a separação. Ex(Pessoa = P e s s o a) Criação de um vetor [p, e, s, s, o, a]
    //reverse inverte as letras. Ex(Pessoa = aosseP)
    //join Faz a junção de todas as letras. Ex(P E S S O A = PESSOA)
}
console.log('Thiago'.reverse());

Array.prototype.first = function() { //Está função pega o primeiro elemento de um vetor(Array)
    return this[0]//Indice 0 = (1º Elemento).
}
console.log();
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first());

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse());