//Factory(Fábrica) Simple(Simples);
function CreatePerson(Name, Lastname, Age, Weight, Height) {
    return {
        Name,
        Lastname,
        Age,
        Weight,
        Height,
    }
}
console.log( CreatePerson('Thiago', 'Jose',20, 76+'kg', 1.71));

function CreateProduct(Name, Price, Discount) {
    return {
        Name,
        Price,
        Discount,
    }
}
console.log();
console.log(CreateProduct('Creatina','R$:'+49.9+'0', 0.1+'%'));