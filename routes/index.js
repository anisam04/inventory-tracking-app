var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/indexCtrl')

router.get('/', indexCtrl.getreadmePage);
module.exports = router;
