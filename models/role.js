const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    priority : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Roles',roleSchema);