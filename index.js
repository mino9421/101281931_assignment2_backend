let express = require('express')
let mongoose = require("mongoose")
const EmployeeRoutes = require('./routes/EmployeeRoutes')

const DB_URL = `mongodb+srv://armen:mino9494@comp3123.flrd9.mongodb.net/101281931_assignment2?retryWrites=true&w=majority`

let app = express()

app.use(express.json()) // allows parsing the body of post request into json

app.use('/', EmployeeRoutes)


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

app.get('/', async (req, res) => {
    console.log('root router working')
    res.send('<h1>MongoDB assignment2</h1>')
    res.end();
})

app.listen(8089, () => {
    console.log('Server running at http://localhost:/8089/')
})