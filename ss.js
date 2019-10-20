function SuperType(name) {
  this.name = name;
  this.colors = ['red','blue','green']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}
function SubType(name, age) {
  SuperType.call(this);
  this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype = {
  constructor: SubType,
  sayAge: function () {
    console.log(this.age)
  }
}

var instance1 = new SubType();