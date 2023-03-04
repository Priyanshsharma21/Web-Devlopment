const mongoos = require('mongoose');

mongoos.connect("mongodb://localhost:27017/RelationDB",{useNewUrlParser: true});



const order_schema = new mongoos.Schema({
    id : {
        type : Number,
        require : [true,"Can't Leave Empty"]
    },
    Name : String,
});

const Order = mongoos.model("Order",order_schema);

const o1 = new Order({
    id:1,
    p_Name : "Pen"

})

const o2 = new Order({
    id:2,
    p_Name : "Eraser"
})

const o3 = new Order({
    id:3,
    p_Name : "Sharpner"
})

const o4 = new Order({
    id : 4,
    p_Name : "Chair"
})




const Comp_schema = mongoos.Schema({

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
    },

    Order_type : order_schema, // we are imbeeding a order docunent in this variable
    Order_name : order_schema.p_Name
})


const Employee = new mongoos.model("Employee",Comp_schema);

const e1 = new Employee({
    id : 1,
    Name : "Ashutosh Pujari",
    Rating : 7,
    Order_type : o1
})

const e2 = new Employee({
    id : 2,
    Name : "Yugesh Pujari",
    Rating : 8,
    Order_type : o2

})

const e3 = new Employee({
    id : 3,
    Name : "Ayush Purohit",
    Rating : 7,
    Order_type : o1

})

const e4 = new Employee({
    id : 4,
    Name : "Shashank Tiwari",
    Rating : 9,
    Order_type : o3

})

const e5 = new Employee({
    id : 5,
    Name : "Angela yuro",
    Rating : 8,
    Order_type : o4

})


Employee.updateOne({id:1},{Orde_name : o1.p_Name },function(err){
    if(err){
        console.log("Error")
    }else{
        console.log("Company Database Start......")
    }
})


Employee.insertMany([e1,e2,e3,e4,e5],function(err){
    if(err){
        console.log("Error")
    }else{
        console.log("Company Database Start......")
    }
})






