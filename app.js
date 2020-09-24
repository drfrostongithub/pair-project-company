const express = require ('express');
const session = require (`express-session`)
const logger = require(`./middlewares/logger`)
const app = express();
const routes = require('./routers/index.js');

const PORT = 3000;

app.set ("view engine", "ejs");

app.use (express.urlencoded({extended: true}));
// Middleware Logger
app.use(logger) 
// Session
app.use(session({
    secret: "pairprojectphase1",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000
    }
  }))

app.use ('/', routes);


app.listen(PORT, ()=>{
    console.log(`application is running at http://localhost:${PORT}`);
}) 