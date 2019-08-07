// const express = require('express');
import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();
const defaultController = require('../../controllers/index');

router.get('/', defaultController.get);
router.get('/page', defaultController.page);
router.get('/wsdl', defaultController.get);

module.exports = router;
