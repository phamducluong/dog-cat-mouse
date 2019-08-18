function Mouse(name,weight){
    this.name = name;
    this.weight = weight;
    this.dead = false;
}
Mouse.prototype.die = function(){
    this.dead = true;
}
Mouse.prototype.sayHello = function(){
    return "Hello every one";
}
module.exports = Mouse;