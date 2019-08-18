const Dog = require('./Dog');
const Cat =require('./Cat');
const Mouse = require('./Mouse');


const cat = new Cat('Cat');
const dog = new Dog('Dog');
const mouse = new Mouse('Mouse');

try{
    cat.eat(mouse);
    console.log(cat);
    cat.eat(dog);
    console.log(cat);
}
catch(error){
    console.log('Cant eat');
}
console.log('hihi');
