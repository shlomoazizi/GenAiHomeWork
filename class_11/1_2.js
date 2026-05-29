const scores = [88, 92, 100];

// 1. Sort in descending order (highest to lowest)
const sortedScores = [...scores].sort((a, b) => b - a);

// 2. Use array destructuring and the rest operator
const [firstPlace, ...runnerUps] = sortedScores;

console.log(firstPlace); // Output: 100
console.log(runnerUps);  // Output: [92, 88]