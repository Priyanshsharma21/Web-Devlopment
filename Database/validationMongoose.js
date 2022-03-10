const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentDB',{ useNewUrlParser: true });

// In the schema we can deside the validation chaek 
// This keep our data clean and stop wrong this value 
const emp_schema = new mongoose.Schema({
    Name : {
        type : String,
        required: true
    },
    Age : {
        type : Number,
        min : 17,
        max : 24
    },
    Emp_Number : {
        type : String,
        required: [1,"You can't skip this field!"] // 1 -> True
    },
    SGPA : {
        type : Number,
        min : 5.0,
        max : 10.0
    }
});

const Student = mongoose.model("Student",emp_schema);

const s1 = new Student({
    Name : "Priyansh sharma",
    Age : 20,
    En_Number : "0808CS191147",
    SGPA : 9.0
});

const s2 = new Student({
    Name : "Pawan Birla",
    Age : 22,
    Emp_Number : "0808CS191134",
    SGPA : 8.2
});

const s3 = new Student({
    Name : "Piyush Jain",
    Age : 22,
    Emp_Number : "0808CS191133",
    SGPA : 8.9
});


const s4 = new Student({
    Name : "Shashank",
    Age : 22,
    Emp_Number : "0808CS191170",
    SGPA : 8.0
});






Student.insertMany([s1,s2,s3,s4],function(err,workout){
    if(err){
        console.log(err);
    }else{
        console.log("Successfully Database Created....");
    }
})



