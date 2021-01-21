class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}
const zhang = new Person('杰',20)
zhang.eat()
zhang.speak()