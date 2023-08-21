const Pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'];
Pilotos.pop(); // Método pop() ele faz a remoção do ultimo elemento do vetor.
console.log(Pilotos);
////////////////////////////////////
Pilotos.push('Verstappen'); //Método push() Adiciona um elemento na ultima posição do vetor;
console.log(Pilotos);
////////////////////////////////////
Pilotos.shift(); //Método shift faz a remoção do primeiro elemento do vetor
console.log(Pilotos);
////////////////////////////////////
Pilotos.unshift('Mamilton'); //Adiciona um elemento no primeiro indice do vetor.
console.log(Pilotos);
////////////////////////////////////
Pilotos.splice(2,0, 'Bottas', 'Massa')//Método splice faz tanto a remoção como a adição de elementos dentro de um vetor.
console.log(Pilotos);
////////////////////////////////////
const AlgunsPilotos = Pilotos.slice(2) //  a partir do indice 2 todos os elementos serão copiados e passados para um novo vetor. Porém não havéra alteração no vetor original(Pilotos).
console.log('Vetor AlgunsPilotos = '+AlgunsPilotos);

const AlgunsPilotos2 = Pilotos.slice(1, 4);
console.log('Vetor AlgunsPilotos2 = '+AlgunsPilotos2);