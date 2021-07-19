const express = require('express');
const demoController = require('../controllers/demoController');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('this is demo route');
});

router.get('/user/all', demoController.getAllUsers);
router.get('/user/:id', demoController.getUserById);

module.exports = router;
