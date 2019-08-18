const Mouse = require('./Mouse');

function Cat(name){
    this.name = name
    this.stomach = [];
}
Cat.prototype.eat = function(animal){
    if(animal instanceof Mouse ){
        this.stomach.push(animal)
    }
    else{
        throw new Error('Cat cant eat this animal');
    }
}
Cat.prototype.say = function (){
    console.log('My name is ' +this.name);
}
module.exports = Cat;