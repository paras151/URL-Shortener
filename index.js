const express = require('express');
const connectDB = require('./config/db')
const app = express();

connectDB();
app.use(express.static('public'));
app.use(express.json({extended:false}));

app.use('/',require('./routes/index'));
app.use('/api/url',require('./routes/url'));
var port = process.env.PORT||8080;

app.listen(port,()=>console.log(`Server running on port ${port}`));
