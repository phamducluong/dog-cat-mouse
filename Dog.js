const chalk  = require('chalk');
function Dog (name)
{
    this.stomach = [];
    this.name = name;
}
Dog.prototype.eat = function(cat){
    this.stomach.push(cat);
}
Dog.prototype.say = function(){
    console.log('My name is '+ chalk.blue(this.name));
}
module.exports = Dog;