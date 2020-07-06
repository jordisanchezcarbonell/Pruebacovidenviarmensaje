const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const port = 4444;

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});

app.use(morgan('dev'));
app.use(express.json());
console.log('from sendToMe');

app.use('/sendtome', require('./routes/sendToMe'));
