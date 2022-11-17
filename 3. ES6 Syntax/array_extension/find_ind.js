let ranks = [1,5,7,2,4,7,5]

let index = ranks.findIndex(rank => rank ===7)
console.log(index);

let index1 = ranks.findIndex((rank,index) => rank ===7 && index>2);
console.log(index1)


const products = [
    {name: "phone", price:99},
    {name: "computer", price:1999},
    {name: "tablet", price:93},

];


let ind = products.findIndex(product => product.price >1000);
console.log(ind)