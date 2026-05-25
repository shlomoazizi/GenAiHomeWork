const students = [
  { name: 'John', passed: true },
  { name: 'Jane', passed: false }
];

// מעבר על המערך בעזרת forEach והדפסת ההודעה
students.forEach(student => {
 // console.log(`${student.name}'s record has been reviewed.`);
  console.log(student.name+"'s record has been reviewed.");
});