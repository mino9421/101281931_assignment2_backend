const express = require('express');
const EmployeeModel = require('../models/EmployeeModel');

const router = express.Router()

// testers

// get all employees
router.get('/hello', async (req, res) => {
    
    EmployeeModel.find({}, (err, employee) => {
        if(err) res.send({"Error": err.toString()})
        res.send(employee)
        console.log("Item retrieved")
    })
    
})

// I think this is good to go can get employee ById
router.get('/hello/:id', async (req, res) => {
    // validate request
    if(!req.body) {
        return res.status(400).send({
            message: 'Note content can not be empty'
        })
    }
    
    try{
        const employee = await EmployeeModel.findById(req.params.id)
        console.log('Item retrieved')
        res.send(employee)
    }catch(err){
        res.send({'Error': err.toString()})
    }

})
// this is working with sample object data needs work ******************
router.post('/hello', async (req, res) => {
    
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    let emp = {
        firstName: "armen",
        lastName: "mino",
        emailId: "mino94@gmail.com"
    }

    const employee = new EmployeeModel(emp)

    try{
        await employee.save()
        console.log("Emplyee record saved")
        res.status(200).send("Employee record saved")
    }catch(err){
        console.log("ERROR: Employee record saved: " + err)
        res.status(500).send(err)
    }

})

// I think this is good to go
router.put('/hello/:id', async (req, res) => {
   
    EmployeeModel.find({}, (err, employee) => {
        if(err) res.send({"Error": err.toString()})
        EmployeeModel.findByIdAndUpdate(req.params.id, {firstname: 'levon'}, (err, employee) => {
            if(err) res.send({"Error": err.toString()})
            res.send(employee)
            console.log("Item Updated")
        });
    })
})

// done this deletes ById
router.delete('/hello/:id', async (req, res) => {
    
    try{
        const employee = await EmployeeModel.findByIdAndDelete(req.params.id)     
        if(!employee) res.status(404).send({"error": "Item Not Found"})
        res.status(200).send("Student Record Deleted")
    }catch(err){
        res.send({"Error": err.toString()})
    }
})


module.exports = router