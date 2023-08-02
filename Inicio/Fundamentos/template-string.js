const nome = "Rebeca";
const comcatenacao = 'Olá ' + nome + '!';
const template = `\n
    Olá
    ${nome}!
    `;
console.log(comcatenacao, template);


console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);