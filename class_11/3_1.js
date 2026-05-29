const inventory = [
  { item: "Laptop", price: 1200, quantity: 5 },
  { item: "Mouse", price: 25, quantity: 50 },
  { item: "Keyboard", price: 100, quantity: 20 }
];

const totalValue = inventory.reduce((total, currentItem) => {
  // בכל איטרציה, אנו מוסיפים ל-total את שווי הפריט הנוכחי (מחיר כפול כמות)
  return total + (currentItem.price * currentItem.quantity);
}, 0); // הערך ההתחלתי של total הוא 0

console.log(totalValue); 
// פלט: 9250