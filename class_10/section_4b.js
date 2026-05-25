let group1 = ['Alice', 'Bob'];
let group2 = ['Charlie', 'Dave'];

// משימה 1: איחוד המערכים למערך אחד חדש
let allUsers = [...group1, ...group2]; 

// משימה 2: המרה למחרוזת מופרדת במקף ורווח
let joinedString = allUsers.join(' - ');

// הדפסות לבדיקה:
console.log(allUsers); 
// תוצאה: ['Alice', 'Bob', 'Charlie', 'Dave']

console.log(joinedString); 
// תוצאה: "Alice - Bob - Charlie - Dave"