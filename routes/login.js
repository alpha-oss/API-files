let express = require('express');
let router = express.Router();

router.post('/',(req,res) => {

    // Fetch Data from Request 
    let username = req.body.username;
    let password = req.body.password;

    // Return Response back to User/Client
    return res.status(200).json({message:"Login"});
});

module.exports = router;