// Create function following below
// expression function
let add, subtract, multiply, divide ;

function mathOperations(a, b) {
    add = a+b ;
    subtract = a-b ;
    multiply = a*b ;
    divide = a/b ;
}

mathOperations(5, 3);
console.log(`${add}  ${subtract}  ${multiply}  ${divide}`);

// arrow function
const mathCal = (c, d) => {
    console.log(`add : ${c+d}`) ;
    console.log(`subtract : ${c-d}`) ;
    console.log(`multiply : ${c*d}`) ;
    console.log(`divide : ${c/d}`) ;
}
mathCal(9, 7);


// Create Function Inform
function informations(firstName, location, hobby) {
    console.log("Hi, my name is " + firstName + ". I live in " + location + " and enjoy "+ hobby + ". ");
}

informations("Paifon", "Thailand", "sleeping");

