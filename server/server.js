const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require ('mongoose');
const bodyParser = require("body-parser")

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


//mongoose connection
mongoose.connect("mongodb+srv://dev:CQ2qAwKaBdxVC2BP@cluster0.hkypo.mongodb.net/auth?retryWrites=true&w=majority",
{
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
//to get rid of depreciation warning within mongoose itself
mongoose.set('useCreateIndex', true)

//defining routes
app.use("/", require("./routes/userRoutes"))

app.get("/", function (req,res) {
    res.send("express is working")
})


const port = 3001
app.listen(port, function(){
    console.log(`you are running the express server on port: ${port}`)
})