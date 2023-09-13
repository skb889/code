// randomMessageGenerator.js

// Define an array of random messages
const messages = [
    "Hello, world!",
    "This is a random message.",
    "Node.js is fun!",
    "You're doing great!",
    "Have a fantastic day!",
  ];
  
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * messages.length);
  
  // Get a random message
  const randomMessage = messages[randomIndex];
  
  // Display the random message
  console.log(randomMessage);
  