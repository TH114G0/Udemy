function compras(trabalho1, trabalho2) {
    const ComprarSorvete = trabalho1 || trabalho2;
    const ComprarTv50 = trabalho1 || trabalho2;
    //const ComprarTV32 =  !!(trabalho1 ^ trabalho2); bitwise xar
    const ComprarTv32 = trabalho1 != trabalho2;
    const ManterSaudavel = !ComprarSorvete//Operador unário

    return {  ComprarSorvete, ComprarTv50, ComprarTv32, ManterSaudavel  }
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));