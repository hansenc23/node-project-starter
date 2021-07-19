const express = require('express');
const router = express.Router();
const demoRoute = require('./demoRoute');

router.get('/', (req, res) => {
  res.send('This is node-project-starter');
});

router.use('/demo', demoRoute);

module.exports = router;
