const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
   

mongoose.connect(uri, { useNewUrlParser: true,  });
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const attractionsRouter = require('./routes/attractions');
const emailRouter = require('./routes/email');
    app.use('/attractions', attractionsRouter);
    app.use('/emails', emailRouter);

    if (process.env.NODE_ENV === "production"){
      app.use(express.static('client/build'))
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build'))
      })
    };

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
