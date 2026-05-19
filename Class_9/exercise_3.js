function createProduct(id, name, price) {
  return {
    //  id: id,
    //  name: name,
    //   price: price,
    id,
    name,
    price,
    // getSummary: function () {
    getSummary() {
    //  return "Product: " + this.name + " costs $" + this.price;
     return `Product: ${this.name} costs $${this.price}`;
    },
  };
}
//var myProduct = createProduct(101, "Wireless Mouse", 25);
const  myProduct = createProduct(101, "Wireless Mouse", 25);
console.log(myProduct.getSummary());
