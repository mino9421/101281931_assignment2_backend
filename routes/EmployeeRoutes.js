const express = require('express');
const Employee = require('../models/EmployeeModel');
const EmployeeModel = require('../models/EmployeeModel');

const router = express.Router()


// testers

// get all employees
router.get('/hello', async (req, res, next) => {
    console.log('GET hello')
    res.send('<h1>GET hello router</h1>')
    res.end();
})
// get specifc ID using params
router.get('/hello/:id', async (req, res, next) => {
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

    // console.log('GET hello router')
    // res.send('<h1>GET hello</h1>')
    // res.end();
})

router.post('/hello/:id', async (req, res, next) => {
    
    
    console.log('POST hello router')
    res.send('<h1>POST hello</h1>')
    res.end();
})

router.put('/hello/:id', async (req, res, next) => {
   
    
    console.log('PUT hello router')
    res.send('<h1>PUT hello</h1>')
    res.end();
})

router.delete('/hello/:id', async (req, res, next) => {
    
    
    console.log('DELETE hello router')
    res.send('<h1>DELETE hello</h1>')
    res.end();
})


module.exports = router