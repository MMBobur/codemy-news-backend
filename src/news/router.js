const express = require('express');
const router = express.Router();

const validate = require("express-validation");
const Validator = require("./validator");
const newsCont = require('./controller');

router.get('/',newsCont.findAll);
router.get('/:id',newsCont.findOne);
router.post('/',(validate(Validator.addNew),newsCont.create));
router.put('/:id',(validate(Validator.updateOne),newsCont.update));
router.delete('/:id',(validate(Validator.deleteOne),newsCont.delete));

module.exports = router;