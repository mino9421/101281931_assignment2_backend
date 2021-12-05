const mongoose = require('mongoose');

const emailRegEx = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

// var validateEmail = function(email) {
//     return emailRegEx.test(email)
// }

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
        // validate: [validateEmail, `Invalid email format`]
    }
})

const Employee = mongoose.model("employees", EmployeeSchema);

module.exports = Employee