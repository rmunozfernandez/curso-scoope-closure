// variables
var a; // declarando
var b = 'b'; // declaración y asignación
b = 'bb'; // reasignación
var a = 'aa' // redeclaración


// Global Scope
var fruit = 'Apple';
console.log(fruit);

function bestFruit()
{
    console.log(fruit);
}

bestFruit();


function countries()
{
    country = 'Colombia'; // Es global porque no ha sido declarada, solo asignada
    console.log(country);
}

countries();
console.log(country);