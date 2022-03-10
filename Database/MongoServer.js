 // lod the mongoose in our js file
const mongoose = require('mongoose');

// use connect method to start it on local server  
// and database with name student created 
mongoose.connect('mongodb://localhost:27017/studentDB',{ useNewUrlParser: true });


// create a schema -> The bluprint our whole database follow 
const student_schema = new mongoose.Schema({
    Name : String,
    Age : Number,
    En_Number : String
});

// create mongoose  model(aka collection) // Like table in sql
// pass arguments -> student(singular form),schem it going to follow
const Student = mongoose.model("Student",student_schema);

// create document -> Creating student docs from Student model
const student = new Student({
    Name : "Priyansh sharma",
    Age : 20,
    En_Number : "0808CS191147"
});

// student.save(); // save student document inside the Student collection inside studentdb
// now wneh we run it (mongod,mongo,node file.js) then we created our db

const workout_schema = new mongoose.Schema({
    Muscle : String,
    Day : String,
    Workout_name : [{W1 : String,W2 : String,W3 : String}]
});

const Workout = mongoose.model("Workout",workout_schema);

const workout = new Workout({
    Muscle : "Chest",
    Day : "Monday",
    Workout_name : [{W1 : "Incline Press",W2 : "Machine Press",W3:"Calbe flys"}]
})

const priyansh = new Workout({
    Muscle : "Back",
    Day : "Tuesday",
    Workout_name : [{W1 : "Latpull-Down",W2 : "Cable-rows",W3:"Dumbell Pullovers"}]
})

const shreyansh = new Workout({
    Muscle : "Legs",
    Day : "Wednesdat",
    Workout_name : [{W1 : "Barbell Squats",W2 : "Leg Press",W3:"Hamstring Curls"}]
})

// workout.save(); // this is use to save only one docs to insert many, yes -> use insertMany

Workout.insertMany([priyansh,shreyansh],function(err,workout){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully Database Created....");
    }
})


// Access the database 

Workout.find(function(err,workout){
    if(err){
        console.log(err);
    }else{

        mongoose.connection.close(); //Good to exit database
        workout.forEach(function(workout){
            console.log(workout.Workout_name);
        })
    }
})















