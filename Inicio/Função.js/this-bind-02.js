function pessoa() {
    this.idade = 0;

    //const self = this; 
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
new pessoa;
/*A função bind() serve exatamente para dizer para o this que quando ele 
for chamado ele tem que apontar para a função a qual ele pertence e não para o objeto que chamou ele.*/