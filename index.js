


const express = require('express')
const app = express()
const port = 3000

//loading middleware into the app
//inbuild middleware
app.use(express.json());
// express.json()

// //middleware - logging, auth, validation

// //Creation of middleware using the demon 
// const loggingMiddleware = function(req,res, next){
//     console.log("Login krr rha hu mai!")
//    // res.send("Let's gooooo!")
//    next();
// }

// //Loading middleware into application
//  app.use(loggingMiddleware);

// const authMiddleware = function(req, res, next){
//     console.log("Currently I'm doing the Authentication!");
//     next();
// }
// app.use(authMiddleware);

// const validationMiddleware = function(req, res, next){
//     console.log("Currently I'm doing the validation!");
//     next();
// } 
// app.use(validationMiddleware);

const route = require('./routes/routes')

//Mounting the routes
app.use("/api", route)

app.get('/', (req, res)=>{

    console.log("I'm the route handler!")
    console.log(req.body);
    res.send('Hellow world!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  