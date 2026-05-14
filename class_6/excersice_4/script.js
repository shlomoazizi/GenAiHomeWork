const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];

// מעבר על כל איברי המערך בעזרת לולאת for
console.log('0, "hello", "", null, 42, undefined, NaN, "false", [], {}')
for (let i = 0; i < mixedValues.length; i++) {
    let currentValue = mixedValues[i];
    
    // בדיקה האם הערך הוא Truthy או Falsy
    if (currentValue) {
        // שימוש ב-JSON.stringify כדי שהמערך והאובייקט הריקים יודפסו בצורה ברורה
        console.log(JSON.stringify(currentValue) + " is Truthy");
    } else {
        // הוספתי גם הדפסה לערכי Falsy כדי שהתוצאה תהיה ברורה יותר לעין (אופציונלי)
        console.log(JSON.stringify(currentValue) + " is Falsy"); 
    }
}
/*"false" is Truthy becaues it's sring like kuku
array and object all time in JS isTruthy*/