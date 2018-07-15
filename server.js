const 
    express = require('express'),
    app = express(), 
    port = 3000,
    logger = require('morgan'), 
    mongoose = require('mongoose'),
    haikuRouter = require('./haikuRouter')

mongoose.connect("mongodb://localhost/hwk", (err) => {
    console.log(err || "Connected!")
}) 

//mid-ware
app.use(logger('dev')) 
app.use(express.json()) 

//routes
app.use('/', haikuRouter)

app.listen(port, (err) => {
    console.log(err || `Server running on ${port}.`)
})