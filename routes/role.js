const express = require('express');
const router = express.Router();

// Import ROLE into this file
let role = require('../models/role');

router.get('/all',(req,res) => {
    role.find().then(roles => {
        return res.status(200).json({roles});
    }).catch(err => {
        return res.status(500).json({message : "Internal Server Error"});
    });
});

router.post('/create',(req,res) => {
    // Create Object new role
    let newRole = new role({
        name : req.body.name,
        priority : req.body.priority
    });

    // Send the New Role to DB to be saved
    newRole.save((err,result) => {
        if(err) {
            console.log("Error Saving Role ",err);
            return res.status(500).json({message:"Error Saving Role"});
        }
        else {
            console.log("Saved to the DB");
            return res.status(200).json({message:"Role Created"});
        }
    });

});

router.delete('/delete',(req,res) => {
    role.deleteOne({_id:req.body.id},(err,result) => {
        if(err) return res.status(500).json({message : "Error Deleting Role"});
        else return res.status(200).json({message : "Role Deleted"});
    });
});

module.exports = router;