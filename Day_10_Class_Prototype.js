class Student {

    constructor(name, age) {
        this.name1 = name;
        this.age1 = age;
        console.log("Hello There")
        console.log(this.name1)
    }

    study() {
        console.log(`${this.name1} is studying`);
    }

    introduce() {
        console.log(`My name is ${this.name1} and I am ${this.age1} years old`);
    }
}

let s1 = new Student("Hari", 20);
s1.study();
s1.introduce();

let s2 = new Student("Ram", 22);
s2.study();
s2.introduce();