let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderstyle: 'solid'
};

let styleBox = Object.assign({},box,style)

console.log(styleBox);