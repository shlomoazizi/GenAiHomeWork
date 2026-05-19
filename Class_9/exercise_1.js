
// ****JavaScript Hoisting: Declarations vs. Expressions
console.log("Total:", calculateTotal(100)); // הקריאה הזו תעבוד בהצלחה


};
 console.log("Discount:", calculateDiscount(100));

// Function Declaration
function calculateTotal(price) {
  return price + 20; 
}

// Function Expression
const calculateDiscount = function (price) {
  return price * 0.10; // 10% הנחה


  /*
we have two Function 
1.Function Declaration
2.Function Expression
 The Hoisting Take  only Function Declaration to begin of the file and its Known also if i execute it before Declare
 in Function Expression it's i can execute only after i declare it.
