const mongoose = require('mongoose');
const db_uri = 'mongodb+srv://name:94j9IQAxDqQltbIP@cluster0.m2y3m.mongodb.net/test?retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    poolSize: 10
}

mongoose.connect(db_uri,options).then(
    () => {
        console.log("Database Connection Established");
    },
    err => {
        console.log("Error Connecting To Database. Error : " + err);
    }
);