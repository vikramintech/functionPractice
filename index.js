console.clear();

// car object

const cars ={
    name: "Swift",
    color: 4,
    isSafe: false
}
// function that returns name propery of a given object
function getName(object){
    return object.name;
}
// invoking getName function

console.log(`The value of name property of an object is${getName(cars)}`);


// function take 3 numbers and give their product

function getProduct(num1,num2,num3){
    return num1*num2*num3;
}

// invoking getProduct function

console.log(`Product of three numbers is${getProduct(2,4,7)}`);

// cars array
const carBrands = ["audi","bmw","VW","skoda","bentely"]

// function that takes an array and returns its fifth element

function getFifthElement(array){
    return array[4];
}
// invoking getfifthElement function

console.log(`Fifth element of an array is${getFifthElement(carBrands)}`);
