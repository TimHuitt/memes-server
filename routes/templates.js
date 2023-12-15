const express = require('express')
const router = express.Router()
const templatesCtrl = require('../controllers/templates')

router.get("/", templatesCtrl.index);
router.get("/:search", templatesCtrl.search);


module.exports = router