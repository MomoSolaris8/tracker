const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use('/exercises', require('./routes/exercises'));
app.use('/users', require('./routes/users'));

//app.listen(port, () => {
  //  console.log(`Server is running on port: ${port}`);
//});