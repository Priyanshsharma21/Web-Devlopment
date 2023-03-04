const mongoos = require('mongoose');
const { numberToString } = require('pdf-lib');

mongoos.connect("mongodb://localhost:27017/EmployeeDB",{useNewUrlParser: true});

const employee_Schema = mongoos.Schema({

    id : {
        type : Number,
        require : [true,"It is a main field"]
    },

    Name : {
        type : String
    },

    Rating : {
        type : Number,
        min : 1,
        max : 10
    } 
})


const Employee = new mongoos.model("Employee",employee_Schema);

const e1 = new Employee({
    id : 1,
    Name : "Ashutosh Pujari",
    Rating : 7
})

const e2 = new Employee({
    id : 2,
    Name : "Yugesh Pujari",
    Rating : 8
})

const e3 = new Employee({
    id : 3,
    Name : "Ayush Purohit",
    Rating : 7
})

const e4 = new Employee({
    id : 4,
    Name : "Shashank Tiwari",
    Rating : 9
})

const e5 = new Employee({
    id : 5,
    Name : "Angela yuro",
    Rating : 8
})

Employee.insertMany([e1,e2,e3,e4,e5],function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Employee Database Created.......");
    }
})


// Update the fields 

Employee.updateOne({id : 3},{Review : "Amazing work throught week"},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Updated field");
    }
})

Employee.deleteOne({id:5},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Opration success..........");
    }
})