"use strict";
//! ---=== 1 ===---
class Address {
    constructor(city, street, postIndex) {
        this.city = city;
        this.street = street;
        this.postIndex = postIndex;
    }
}
class Customer extends Address {
    constructor(name, age, city, street, postIndex) {
        super(city, street, postIndex);
        this.name = name;
        this.age = age;
        this.address = `${city}, ${street} (${postIndex})`;
    }
    showUserData() {
        const userData = `${this.name} ${this.age} ${this.address}`;
        console.log(userData);
    }
}
const Danil = new Customer('Danil', 16, 'Dnipro', 'Shevchenko str', 49020);
Danil.showUserData();
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle {
    constructor(radius) {
        this.PI = Math.PI;
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * 2 * this.PI;
    }
}
const circle1 = new Circle(24);
console.log(circle1.calculateArea());
const rectangle1 = new Rectangle(10, 10);
console.log(rectangle1.calculateArea());
class Store {
    constructor(name) {
        this.name = name;
        this.products = [];
    }
    addNewProduct(productId, productName, productPrice) {
        const newProduct = {
            id: productId,
            name: productName,
            price: productPrice
        };
        this.products.push(newProduct);
    }
    showProduct() {
        return this.products;
    }
    removeProduct(productId) {
        const products = this.products;
        this.products = products.filter(product => product.id !== productId);
    }
}
const Shop = new Store('Megastore');
Shop.addNewProduct(1, 'Pepsi', 16);
Shop.addNewProduct(2, '7Up', 24);
Shop.addNewProduct(3, 'Coffe', 54);
console.log(Shop.showProduct());
Shop.removeProduct(1);
console.log(Shop.showProduct());
