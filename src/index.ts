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

// console.log(new Person("Nguyen Xuan Ho", 25).displayInfo());

// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.


class Student extends Person {
    grade: number;


    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    displayAllInfo(): string {
        return `${super.displayInfo}, Age: ${this.grade}`;
    }
}

// console.log(new Student("Karen Tamoza", 12, 8.5));

// 3. Create a class Car with properties brand, model, year. Write a method to show car info.

class Car {
    brand: string;
    model: string;
    year: number;


    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;

    }

    showCar(): string {
        return `Brand: ${this.brand}, Model: ${this.model},  Year: ${this.year}`;
    }
}

console.log(new Car("Honda", "X23", 2002));

