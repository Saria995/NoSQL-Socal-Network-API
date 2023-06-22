const mongoose = require('mongoose');
const db = require("./models");

const connection = require("./config/connection");
const seedData= [
    {
        username: "Bob Jane",
        email: "bobjane@gmail.com",
        thoughts: [

        ],
        friends: [

        ],
    }
]

db.User.deleteMany({}).then(()=> {
    db.User.insertMany(seedData).then((data) => {
        console.log(data.result);
        console.log("records inserted");
        process.exit(0);
    })
});
