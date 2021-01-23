//封装三要素
// public 完全开发
// protected 对子类开放
// private 对自己开放

//es6不支持。可以用typescript演示
class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name} eat something`)
    }
}
//子类
class Child extends Father {
    constructor(name, age,doSomething) {
        super(name,age)
        this.doSomething = doSomething
    }
    study() {
        alert(`${this.name} study ${this.doSomething}`)
    }
    getWeight() {
        alert(`weight ${this.weight}`)
    }
}
//实例子类
let zzj = new Child('zzj',20,'javaScript')
zzj.getWeight()
zzj.study()