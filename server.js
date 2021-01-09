const express = require('express');
const mongoose = require('mongoose');
const Workout = require("./models/workouts");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});