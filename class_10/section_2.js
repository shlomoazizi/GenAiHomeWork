// הגדרת המערך ההתחלתי
let tasks = ['wash dishes', 'do laundry'];
console.log('"Initinal array" '+ tasks);
// 1. הוספת 'clean room' לסוף המערך
tasks.push('clean room');
console.log('"Push clean room" '+tasks);
// המערך כעת: ['wash dishes', 'do laundry', 'clean room']

// 2. הוספת 'buy groceries' לתחילת המערך
tasks.unshift('buy groceries');
console.log('"unshift buy groceries"' +tasks);
// המערך כעת: ['buy groceries', 'wash dishes', 'do laundry', 'clean room']

// 3. הסרת האיבר האחרון מהמערך ושמירתו במשתנה
let completedTask = tasks.pop();
console.log('"tasks pop"'+tasks.pop());
console.log('"completedTask" ' +completedTask);
// completedTask = 'clean room'
// המערך כעת: ['buy groceries', 'wash dishes', 'do laundry']

// 4. הסרת האיבר הראשון מהמערך ושמירתו במשתנה
let skippedTask = tasks.shift();
// skippedTask = 'buy groceries'
// המערך הסופי: ['wash dishes', 'do laundry']