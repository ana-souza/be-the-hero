const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();

app.use(cours);
app.use(express.json());
app.use(routes);

app.listen(3333);