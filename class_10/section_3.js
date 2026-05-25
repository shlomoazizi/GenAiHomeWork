// הגדרת המערך ההתחלתי
let months = ['Jan', 'March', 'April', 'June'];

// 1. שימוש ב-splice כדי להכניס את 'Feb' למיקום הנכון (אינדקס 1) מבלי למחוק איברים
months.splice(1, 0, 'Feb');
console.log('Array after splice:', months); 
// פלט: ['Jan', 'Feb', 'March', 'April', 'June']

// 2. שימוש ב-slice כדי ליצור מערך חדש המכיל רק את 'March' ו-'April'
// שימו לב: בעקבות ההוספה הקודמת, 'March' נמצא כעת באינדקס 2 ו-'April' באינדקס 3.
// מתודת slice מקבלת (אינדקס_התחלה, אינדקס_סיום_לא_כולל)
let springMonths = months.slice(2, 4);
console.log('Sliced array:', springMonths); 
// פלט: ['March', 'April']

// 3. ווידוא שהמערך המקורי לא השתנה בעקבות פעולת ה-slice
console.log('Original array after slice:', months); 
// פלט: ['Jan', 'Feb', 'March', 'April', 'June']