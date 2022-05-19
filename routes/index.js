var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/indexCtrl')

router.get('/readme', indexCtrl.getreadmePage);
module.exports = router;
