const chalk  = require('chalk');
function Dog (name)
{
    this.name = name;
}
Dog.prototype.say = function(){
    console.log('My name is '+ chalk.blue(this.name));
}
module.exports = Dog;