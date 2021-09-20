const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./server/db')
const apiRouter = require('./server/api');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use('/api', apiRouter);




if (!module.parent) { 
  app.listen(PORT, ()=>{
    console.log( `Listening on port ${PORT}....`)
  })
}
module.exports = app;
