function hello(name: string): string {
    return `Hello, ${name}!`;
}

// console.log(hello("200Lab"));


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

// console.log(new Car("Honda", "X23", 2002));


// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    showRectangle(): string {
        return `Width: ${this.width}, Height: ${this.height}`;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2
    }
}

const rectangle = new Rectangle(20, 15);
// console.log(rectangle.showRectangle());
// console.log("Area: " + rectangle.calculateArea());
// console.log("Perimeter: " + rectangle.calculatePerimeter());



// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Cannot withdraw more than the balance.");
        }
    }

    showBalance(): number {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
// console.log("Current Balance: " + account.showBalance());


// 7. Write a class User with private property name and getter/setter.
class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}
const user = new User("Xuan Ho");
// console.log("User Name: " + user.getName());

// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

}
function getProductsGetterThan100(products: Array<Product>): Array<Product> {
    return products.filter(product => product.price > 100);
}
const products = [
    new Product("Iphone", 2000),
    new Product("Snack", 50),
    new Product("Laptop", 1000),
    new Product("Keyboard", 90),
    new Product("ETS", 100),
    new Product("Lecture", 500),
]
// console.log(getProductsGetterThan100(products));


// 6. Create a class Book with attributes title, author, year.

class Book {
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    displayInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}
const book = new Book("The Great Better Ever", "Xuan Ho", 2001);
// console.log(book.displayInfo());

// 9. Define an interface Animal with name and method sound().

interface Animal {
    name: string,
    sound: () => string;
}

// 10. Create a class Account with public, private and readonly fields.
class Account {
    public name: string;
    readonly balance: number;
    private password: string;

    constructor(name: string, balance: number, password: string) {
        this.name = name;
        this.balance = balance;
        this.password = password;
    }
}



// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark(): string {
        return `${this.name} says gau gau gau!`;
    }
}
class Cat extends Animal {
    meow(): string {
        return `${this.name} says meow meow!`;
    }
}


// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
interface Flyable {
    fly(): string;
}
interface Swimmable {
    swim(): string;
}
class Bird implements Flyable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    fly(): string {
        return `${this.name} is flying!`;
    }
}

class Fish implements Swimmable {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): string {
        return `${this.name} is swimming!`;
    }
}

// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape {
    abstract area(): number;
}
class Square extends Shape {
    side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    name: string;
    position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    displayInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}
class Manager extends Employee {
    manage(): string {
        return `${this.name} is managing the team.`;
    }
}
class Developer extends Employee {
    code(): string {
        return `${this.name} is coding.`;
    }
}

// 15. Create a Library class that can store Book and User objects. Add method to add books.
class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    listBooks(): string {
        return this.books.map(book => book.displayInfo()).join("\n");
    }

    listUsers(): string {
        return this.users.map(user => user.getName()).join(", ");
    }
}

// 16. Create a generic class Box that can store any type of value.
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}











