console.log(typeof Array, typeof new Array, typeof []);

let Aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(Aprovados);

Aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(Aprovados[0]);
console.log(Aprovados[1]);
console.log(Aprovados[2]);
console.log(Aprovados[3]);//undefined

Aprovados[3] = 'Paulo';
Aprovados.push('João');
console.log(Aprovados.length);

 
Aprovados[9] = "Rafael";
console.log(Aprovados.length);
console.log(Aprovados[8] === undefined);
console.log(Aprovados);
/////////////////////////////////
Aprovados.sort();
console.log(Aprovados);
///////////////////////////////
delete Aprovados[0];
console.log(Aprovados);
console.log(Aprovados[0]);
console.log(Aprovados[1]);
///////////////////////////////////
Aprovados = ['Bia', 'Carlos','Ana'];
Aprovados.splice(1,2, 'Elemento1', 'Elemento2');
console.log(Aprovados);