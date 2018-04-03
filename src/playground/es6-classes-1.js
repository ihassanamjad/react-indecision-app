

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old!`;
    }
}

const me = new Person('Hassan Amjad', 23);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());