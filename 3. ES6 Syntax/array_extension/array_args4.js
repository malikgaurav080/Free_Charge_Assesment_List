//find(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): 

let numbers = [1,2,3,4,5];
console.log(numbers.find(e => e % 2 == 0));
