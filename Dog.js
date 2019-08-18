function Dog (name)
{
    this.name = name;
}
Dog.prototype.say = function(){
    return "Gruf gurf.....";
}
module.exports = Dog;