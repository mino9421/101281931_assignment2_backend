const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    }
})

const employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee