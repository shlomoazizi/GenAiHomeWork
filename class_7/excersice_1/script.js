// --- Object Assignment ---
console.log('Object Assignment')
let person1 = { 
  name: "Alex", 
  age: 28 
};

// Assign person1 to person2
let person2 = person1;

// Change the age of person2
person2.age = 99;

// Console log both ages
console.log("person1 age:", person1.age); 
console.log("person2 age:", person2.age); 

console.log('Primitive Assignment')
// --- Primitive Assignment ---
let score1 = 85;
// Assign score1 to score2
let score2 = score1;

// Change score2
score2 = 100;

// Console log both variables
console.log("score1:", score1);  85
console.log("score2:", score2);  100
console.log('QUESTION')
/*
QUESTION: Why did changing person2 affect person1, but changing score2 did NOT affect score1?
באובקיט השמה שני האובקטים מסתכלים על אותו תא בזכרון וזה רק שינוי משני מקומות שונים מה שאין כן בהשמה פרמיטיבית זה השמה לתוך התא בזכרון
*/
console.log("In object assignment, both objects point to the same memory location, so it's just modifying the same data from two different references. In contrast, primitive assignment directly assigns the value into the memory cell.")