let amount = -0,
    volume = +0;

console.log(volume === amount);
console.log(Object.is(amount, volume));


let quantity = NaN;


console.log(quantity === quantity);
console.log(Object.is(quantity, quantity));