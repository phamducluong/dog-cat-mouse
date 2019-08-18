const Dog = require('./Dog');
const Cat =require('./Cat');
const tempCat = new Cat('Temp');
const tempDog = new Dog('Duy');
tempDog.eat(tempCat);
console.log(tempDog);