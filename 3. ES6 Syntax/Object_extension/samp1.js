//object.assign() in es6

let widget = {
    color:'red'
};

let cloneWidget = Object.assign({},widget);
console.log(cloneWidget)