function CalcularIMC(Nome, Idade, Altura, Peso, Genero) {
    
    this.Nome = Nome;
    this.Idade = Idade;
    this.Altura = Altura;
    this.Peso = Peso;
    this.Genero = Genero;

    this.IMC = function() { 
        let IMC = Peso / (Altura * Altura);

        if(Genero.toUpperCase() == 'HOMEM') {
            if(IMC < 17) {
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Magreza`;
            }
    /////////////////////////////////////////////////////////////
            if(IMC < 24.9 || IMC == 17) {
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Normal`;
            }
    /////////////////////////////////////////////////////////////
    
            if(IMC < 29.9 || IMC == 24.9) {
               return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Sobrepeso`;
            }
    /////////////////////////////////////////////////////////////
            
            if(IMC < 34.9 || IMC == 30){
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Obesidade grau i`;
            }
    /////////////////////////////////////////////////////////////
    
            if(IMC < 39.9 || IMC == 35) {
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Obesidade Grau II`;
            }
    /////////////////////////////////////////////////////////////
    
            if(IMC > 40) {
                return `\nOlá ${Nome}, tudo bem ?  Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Obesidade Grau III`;
            }

        }else {
            if(IMC < 16) {
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Magreza`;
            }
    /////////////////////////////////////////////////////////////
            if(IMC < 23.9 || IMC == 16) {
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Normal`;
            }
    /////////////////////////////////////////////////////////////
    
            if(IMC < 28.9 || IMC == 23.9) {
               return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Sobrepeso`;
            }
    /////////////////////////////////////////////////////////////
            
            if(IMC < 33.9 || IMC == 28.9){
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Obesidade grau I`;
            }
    /////////////////////////////////////////////////////////////
    
            if(IMC < 39.9 || IMC == 33.9) {
                return `\nOlá ${Nome}, tudo bem ? Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Obesidade Grau II`;
            }
    /////////////////////////////////////////////////////////////
    
            if(IMC > 40) {
                return `\nOlá ${Nome}, tudo bem ?  Esperamos que sim.
    Aqui está os resultados do seu índice de massa corporal.
                
    ${IMC.toFixed(1)}: Obesidade Grau III`;
            }
        }
///////////////////////////////////////////////////////////////////////////////////
    }
}
const Nome = 'Thiago';
const Idade = 20;
const Altura = 1.71;
const Peso = 78;
const Genero = 'homem'
const Pessoa = new CalcularIMC(Nome, Idade, Altura, Peso, Genero);
const IMC = Pessoa.IMC();
console.log(IMC);