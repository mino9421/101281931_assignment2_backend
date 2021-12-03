const mongoose = require('mongoose');

const emailRegEx = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

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
        validate: {
        validator: function(v) {
            return emailRegEx.test(v);
            },
            message: 'Email validation failed'
        }
    }
})

const employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee