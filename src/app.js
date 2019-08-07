'use strict';
// const v1Router = require('./routes/v1');
// const wsdlRouter = require('./routes/wsdl');
// const {DateTime} = require('luxon');
import dotenv from 'dotenv';
import express from 'express';
import v1Router from './routes/v1';
import wsdlRouter from './routes/wsdl';
import {DateTime} from 'luxon';
// => 동일문법
// const luxon = require('luxon');
// const DateTime = luxon.DateTime;

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/v1', v1Router);
const port = process.env.PORT || 8080;
console.log(process.env);
app.listen(port, () => {
  console.info('start...');
  console.info(`listening on http://localhost:${port} at ${DateTime.local().
      setZone('Asia/Seoul').
      toISO()}`);
  wsdlRouter.route(app);
});

// for test
module.exports = app;
