let scores = [45, 65, 88, 92, 55];

// 1. שימוש ב- find כדי למצוא את הציון הראשון שגדול ממש מ-85
let firstHighScore = scores.find(score => score > 85);

// 2. שימוש ב- every כדי לבדוק אם כל הציונים מעל 40
let allAbove40 = scores.every(score => score > 40);

// 3. שימוש ב- some כדי לבדוק אם יש ציונים כלשהם מתחת ל-50
let anyBelow50 = scores.some(score => score < 50);

// הדפסות לבדיקת התוצאות:
console.log("First score strictly greater than 85:", firstHighScore); // 88
console.log("Are all scores above 40?", allAbove40);                  // true
console.log("Are there any scores below 50?", anyBelow50);            // true