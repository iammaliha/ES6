function greet(name = "Guest"){
    return "Hello" + name;
}


console.log(greet("Abir"));
console.log(greet(""));
console.log(greet());


function makeCoffee(suger = 1){
    return "coffee is prepared "  +   "with "   +  suger  +  "spoon suger"
}
console.log(makeCoffee(2));
console.log(makeCoffee(7));
console.log(makeCoffee());