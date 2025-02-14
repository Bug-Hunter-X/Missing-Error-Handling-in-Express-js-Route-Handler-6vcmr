const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Check if userId is a valid integer
  if (!/^[0-9]+$/.test(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  //Check if userId exists in the database, example
  //Further code to fetch user data from database or other sources
  //Example using mock data
  const users = {
    '1': { name: 'John Doe' },
    '2': { name: 'Jane Smith' }
  };
  const user = users[userId];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});
