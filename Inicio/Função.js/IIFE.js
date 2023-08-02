//IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION;

function getPrice(Tax = 0, Coin = 'R$') {
    return `${Coin} ${this.Price * (1 - this.Discount) * (1 + Tax)}`
}

const Product = {
    Name: 'Computer',
    Price: 2.500,
    Discount: 0.15,
    getPrice
}

global.Price = 20;
global.Discount = 0.1;
console.log(getPrice());
console.log(Product.getPrice());

const Car = { Price: 50000, Discount: 0.20 }

console.log(getPrice.call(Car));
console.log(getPrice.apply(Car));

console.log(getPrice.call(Car, 0.17, '$'));
console.log(getPrice.apply(Car, [0.17, '$']));