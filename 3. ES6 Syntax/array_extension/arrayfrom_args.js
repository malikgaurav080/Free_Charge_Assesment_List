function arrayFromArgs(){
    return Array.from(arguments);
    
}

var fruits = arrayFromArgs('Apple', 'Orange','Banana');
console.log(fruits);


//ES6 introduces Array.from() that creates a new instance of the array from an array-like iterable obeject.
//syntax:  Array.from(target[,mapFn[,thisArg]])