const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    minScore : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('Awards',awardSchema);