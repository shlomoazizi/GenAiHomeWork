const userProfile = {
  id: 402,
  username: "code_ninja",
  location: {
    country: "USA",
    city: "Seattle"
  },
  preferences: {
    hobbies: ["cycling", "reading", "gaming"]
  }
};

// Destructuring the object
const {
  username: handle,
  location: { city },
  preferences: { hobbies: [firstHobby] }
} = userProfile;

console.log(handle);     // Output: "code_ninja"
console.log(city);       // Output: "Seattle"
console.log(firstHobby); // Output: "cycling"