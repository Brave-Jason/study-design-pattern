//三大要素继承
//父类
class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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
}
//实例子类
let zzj = new Child('zzj',20,'javaScript')
zzj.eat()
zzj.study()