const person = { name: "Clark Kent", occupation: "Reporter" };
const powers = { flight: true, strength: "superhuman" };

// Merging the objects into a new one
const superHero = { ...person, ...powers };

console.log(superHero);
// Output: { name: 'Clark Kent', occupation: 'Reporter', flight: true, strength: 'superhuman' }