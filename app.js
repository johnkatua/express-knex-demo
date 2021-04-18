const express = require('express');
const usersRouter = require('./routes/users');
const app = express();

const PORT = 8000;

// routes
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});