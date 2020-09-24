const express = require ('express');
const logger = require(`./middlewares/logger`)
const app = express();
const routes = require('./routes/index.js');

const PORT = 3000;

app.set ("view engine", "ejs");

app.use (express.urlencoded({extended: true}));
// Middleware Logger
app.use(logger) 


app.use ('/', routes);


app.listen(PORT, ()=>{
    console.log(`application is running at http://localhost:${PORT}`);
}) 