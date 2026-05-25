const products = [
  { id: 1, price: 20 },
  { id: 2, price: 50 },
  { id: 3, price: 15 }
];

// שימוש בשרשור (Chaining) של filter ו-map
const expensiveProductIds = products
  .filter(product => product.price >= 20) // מסנן רק מוצרים שמחירם 20 ומעלה
  .map(product => product.id);            // שולף רק את ה-id של המוצרים שנותרו

// הדפסה לבדיקה:
console.log(expensiveProductIds); 
// תוצאה: [1, 2]