const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'Employee first name required']
    },
    lastName: {
        type: String,
        required: [true, 'Employee last name required']
    },
    emailId: {
        type: String,
        required: [true, 'Employee email required'],
        match: /.+\@.+\..+/,
    }
})

const Employee = mongoose.model("employees", EmployeeSchema);

module.exports = Employee