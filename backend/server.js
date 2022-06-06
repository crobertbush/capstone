const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
        
<<<<<<< HEAD
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
=======
mongoose.connect(uri, { useNewUrlParser: true,  });
>>>>>>> 19efb18df9c8491f465f84f5faa69af367f2bff5
const connection = mongoose.connection;


connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

<<<<<<< HEAD
const exercisesRouter = require('./routes/exercises');  
    const usersRouter = require('./routes/users');  
    
    app.use('/exercises', exercisesRouter);  
    app.use('/users', usersRouter);
=======
const attractionsRouter = require('./routes/attractions');
    
    app.use('/attractions', attractionsRouter);
>>>>>>> 19efb18df9c8491f465f84f5faa69af367f2bff5

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});