const express = require ('express')
const router = express.Router()


// //middleware that is specific to this order

// const timelog = (req, res, next) =>{
//     console.log('Time : ', Date.now())
//     next()
// }

// router. use(timelog)

// //define the home page route

// router.get('/',(req, res) =>{
//     res.send('Birds home page')
// })

// //define about route
// router.get('/about', (req, res) =>{
//     res.send('About birds')
// })

//Creatin our own middlewares 

const aut = function(req, res, next){
    console.log("I'm inside the authenticatio middleware");

    // For understading and learing purpose creating an dummy user data!

    req.user = {userId:1, role: "Student"};

    if(req.user){
        //if a valid user is there in request , then proceed to next middleware

        next();
    }

    else {
        //if there is no valid user then 
        res.json({
            success:false,
            message: "NOt a valid user",
        })
    }
}

const isStudent = function(req, res, next){
    console.log("I'm inside student's middlewar!")

    if(req.user.role == "student"){
        next();
    }

    else{
        res.json({
            success: false,
            message: "Access Denied, this route is only for student's"
        })
    }
}


const isAdmin  = function(req, res, next){
    console.log("I'm inside the isAdmin middleware!")

    if(req.user.role == "admin"){
        next();
    }

    else{
        res.json({
            success:false,
            message: "Access denied: As this route is only for the admins portal"
        })
    }

}






//Creating our own routes


router.get("/student",aut, isStudent, (req, res)=>{
    console.log("I'm inside the student route");
    res.send("Students specific page");
})

router.get("/admin", aut, isAdmin, (req, res)=>{
    console.log("I'm inside admin route");
    res.send("Student specific page");
})



module.exports= router