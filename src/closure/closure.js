function greeting() {
    let userName = 'Oscar';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //retornado la función
console.log(g()); // retornando el valor de la función