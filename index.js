


const express = require('express')
const app = express()
const port = 3000

//loading middleware into the app
//inbuild middleware
app.use(express.json());
express.json()

//middleware - logging, auth, validation

const loggingMiddleware = function(req,res, next){
    console.log("Login krr rha hu mai!")
    next();
}
 app.use(loggingMiddleware);

const authMiddleware = function(req, res, next){
    console.log("Currently I'm doing the Authentication!");
    next();
}
app.use(authMiddleware);

const validationMiddleware = function(req, res, next){
    console.log("Currently I'm doing the validation!");
    next();
} 
app.use(validationMiddleware);

app.get('/', (req, res)=>{

    console.log("I'm the route handler!")
    console.log(req.body);
    res.send('Hellow world!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  