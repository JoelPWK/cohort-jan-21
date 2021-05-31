const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require ('mongoose');


require('dotenv').config({ path: '../.env' });


//setting local port
const port = process.env.PORT || 3001

//middleware
app.use(cors());
app.use(express.json());


//obtaining routes
const userRoutes = require('./routes/userRoutes')

app.use('/register', userRoutes)

//mongoatlas connection string
const uri= process.env.CONNECTIONSTRING

//mongodb connection

mongoose.connect(uri, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb connection complete')
})

app.listen(port, () =>{
    console.log(`you are running the express server on port: ${port}`)
})

