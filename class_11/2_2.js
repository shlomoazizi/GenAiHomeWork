const calculateTotal = (discountPercentage, ...prices) => {
  // 1. Calculate the total sum of all item prices
  const sum = prices.reduce((acc, currentPrice) => acc + currentPrice, 0);
  
  // 2. Calculate the multiplier based on the discount percentage
  const discountMultiplier = 1 - (discountPercentage / 100);
  
  // 3. Return the final discounted total
  return sum * discountMultiplier;
};

// --- Example Usage ---
// 20% discount on items priced 100, 50, and 50 (Total = 200)
console.log(calculateTotal(20, 100, 50, 50)); 
// Output: 160