// server.js
// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON data from requests
app.use(express.json());

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Interview Feedback Platform API!');
});

// Feedback POST route (for collecting feedback data)
app.post('/submit-feedback', (req, res) => {
  const feedback = req.body;  // The feedback will come in the body of the request
  console.log('Feedback received:', feedback);

  // For now, just send a response back
  res.json({
    message: 'Feedback received successfully!',
    receivedData: feedback
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});