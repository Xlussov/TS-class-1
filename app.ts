//! ---=== 1 ===---
class Address {
   private city: string;
   private street: string;
   private postIndex: number;
   
   constructor(city: string, street: string, postIndex: number){
      this.city = city;
      this.street = street;
      this.postIndex = postIndex;
   }
}


class Customer extends Address {
   private name: string;
   private age: number;
   private address: string;

   constructor(name: string, age: number, city: string, street: string, postIndex: number){
      super(city, street, postIndex,)
      this.name = name;
      this.age = age;
      this.address = `${city}, ${street} (${postIndex})`
   }

   public showUserData(): void{
      const userData: string = `${this.name} ${this.age} ${this.address}`
      console.log(userData);
   }

}

const Danil = new Customer('Danil', 16, 'Dnipro', 'Shevchenko str', 49020)
Danil.showUserData()


//! ---=== 2 ===---

interface Shape {
   calculateArea(): number;
}

class Rectangle implements Shape {
   private width: number;
   private height: number;

   constructor(width: number, height: number){
      this.width = width
      this.height = height
   }

   calculateArea(): number{
      return this.width * this.height
   }
}

class Circle implements Shape {
   private radius: number;
   private readonly PI: number = Math.PI

   constructor(radius: number){
      this.radius = radius
   }

   calculateArea(): number{
      return this.radius * 2 * this.PI
   }
}

const circle1 = new Circle(24)
console.log(circle1.calculateArea());

const rectangle1 = new Rectangle(10, 10)
console.log(rectangle1.calculateArea());


//! ---=== 3 ===---

interface Product{
   id: number,
   name: string,
   price: number,
}

class Store{
   private name: string;
   private products: Product[];

   constructor(name: string){
      this.name = name;
      this.products = [];
   }

   public addNewProduct(productId: number, productName: string, productPrice: number): void{
      const newProduct: Product = {
         id: productId,
         name: productName,
         price: productPrice
      }
      this.products.push(newProduct)
   }

   public showProduct(): object[]{
      return this.products
   }
   public removeProduct(productId: number): void{
      const products = this.products
      this.products = products.filter(product => product.id !== productId) 
   }
}


const Shop = new Store('Megastore')
Shop.addNewProduct(1, 'Pepsi', 16)
Shop.addNewProduct(2, '7Up', 24)
Shop.addNewProduct(3, 'Coffe', 54)

console.log(Shop.showProduct());
Shop.removeProduct(1)
console.log(Shop.showProduct());
