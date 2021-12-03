let express = require('express')
let mongoose = require("mongoose")

let app = express()

const DB_URL = `mongodb+srv://armen:mino9494@comp3123.flrd9.mongodb.net/101281931_assignment2?retryWrites=true&w=majority`

mongoose.connect(DB_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Successfully connected to the database mongoDB Atlas Server`)
    })
    .catch(err => {
        console.log(`Could not connect to the database. Exiting now...`, err)
        process.exit()
    });
