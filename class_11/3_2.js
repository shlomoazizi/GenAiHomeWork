const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
  // בודקים האם מפתח הגיל כבר קיים באובייקט (acc)
  // אם לא, מאתחלים אותו כמערך ריק
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  
  // מוסיפים את השם הנוכחי לתוך המערך של הגיל המתאים
  acc[person.age].push(person.name);
  
  // חובה להחזיר את האובייקט (acc) כדי שיועבר לאיטרציה הבאה
  return acc;
}, {}); // מתחילים מאובייקט ריק

console.log(groupedByAge);
// Output: { '25': [ 'Alice', 'Bob' ], '30': [ 'Charlie' ] }