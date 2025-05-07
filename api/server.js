require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todosRoute = require('./routes/todos');

const app = express();
app.use(express.json());
app.use('/todos', todosRoute);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
