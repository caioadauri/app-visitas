const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://app:gomes231290@app-visitas-a6jc4.mongodb.net/appvisitas?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);