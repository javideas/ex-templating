const express = require('express');
const logger = require('morgan');

// Create app server
const app = express();
const path = require('path');
// Configure hbs as view engine
// Iteration 1: setup hbs as view engine
require('./config/hbs.config');


app.set('view engine', 'hbs');

app.set('views', (`${__dirname}/views/`));

app.use(logger('dev'));

// Iteration 5: configure body parser

// Iteration 2: configure global template vars (res.locals.*)
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
  
// Iteration 1: configure router
const router = require('./config/routes.config');
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`))
