const express = require('express');
const EmployeeModel = require('../models/EmployeeModel');

const router = express.Router()


// get all employees
router.get('/employee', async (req, res) => {
    
    EmployeeModel.find({}, (err, employee) => {
        if(err) res.send({"Error": err.toString()})

        res.send(employee.map(item => [item._id, item.firstName, item.lastName, item.emailId].join(" ")))

        console.log("Item retrieved")
    })
    
})

// this will get employee ById
router.get('/employee/:id', async (req, res) => {
    // validate request
    if(!req.body) {
        return res.status(400).send({
            message: 'Note content can not be empty'
        })
    }
    
    try{
        const employee = await EmployeeModel.findById(req.params.id)
        console.log('Item retrieved')
        res.send([employee._id, employee.firstName, employee.lastName, employee.emailId].join(" "))
    }catch(err){
        res.send({'Error': err.toString()})
    }

})

// this will create new employee with the object emp given inside of the api - needs to be fixed to make it dynamic ********
router.post('/employee', async (req, res) => {
    
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    let emp = {
        firstName: "lfdson",
        lastName: "asd",
        emailId: "masdno@gmaad.casdm"
    }

    const employee = new EmployeeModel(emp)

    try{
        await employee.save()
        console.log("Emplyee record saved")
        res.status(200).send("Employee record saved")
    }catch(err){
        console.log(err._message)
        res.status(500).send(err)
    }

})

// this will findByID and update
router.put('/employee/:id', async (req, res) => {

    // it is updating by passing the string manually - needs to fix to make it dynamic ***********
    EmployeeModel.findByIdAndUpdate(req.params.id, {firstName: 'cccccc'}, (err, employee) => {
        if(err) res.send({"Error": err.toString()})
        res.send("old: " + [employee._id, employee.firstName, employee.lastName, employee.emailId].join(" "))
        console.log("Item Updated")
    });
})

// this deletes employee ById
router.delete('/employee/:id', async (req, res) => {
    
    try{
        const employee = await EmployeeModel.findByIdAndDelete(req.params.id)     
        if(!employee) res.status(404).send({"error": "Item Not Found"})
        res.status(200).send("Student Record Deleted")
    }catch(err){
        res.send({"Error": err.toString()})
    }
})


module.exports = router