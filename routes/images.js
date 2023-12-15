const express = require('express')
const router = express.Router()
const imageCtrl = require('../controllers/images')

// GET module - index
router.get("/", imageCtrl.index);

// POST module - create
router.post("/", imageCtrl.create);

// GET module/:id - show
router.get('/:id', imageCtrl.show);

// // UPDATE module/:id - update
// router.put('/:id', imageCtrl.update);

// // DELETE module/:id - destroy
// router.delete('/:id', imageCtrl.delete);


module.exports = router