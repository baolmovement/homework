const 
    express = require('express'),
    app = express(), 
    port = 3000,
    logger = require('morgan'), 
    mongoose = require('mongoose'),
    haikuRouter = require('./haikuRouter')//Access to routes/router file

mongoose.connect("mongodb://localhost/hwk", (err) => {
    console.log(err || "Connected!")
}, { useNewUrlParser: true }) 

//mid-ware
app.use(logger('dev')) 
app.use(express.json()) 

//routes
app.use('/', haikuRouter)//express using routes from a seperate file called HaikuROuter.js

app.listen(port, (err) => {
    console.log(err || `Server running on ${port}.`)
})