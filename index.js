let express = require('express'),
    bodyParser=require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./config/database');

// Routers 
loginRouter = require('./routes/login');
roleRouter = require('./routes/role');

// Routes
app.use('/login',loginRouter);
app.use('/role',roleRouter);

// Run on localhost:5000
app.listen(5000,()=>{
    console.log("Server Running @5000");
});