function hello(name: string): string {
    return `Hello, ${name}!`;
}

console.log(hello("200Lab"));


// 1. Create a class Person with attributes name and age. Write a method to display this information.

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

console.log(new Person("Nguyen Xuan Ho", 25).displayInfo());


