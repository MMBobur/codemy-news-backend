const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const catesConttroller = require("./controller");
 
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");

router.use(authenticate);
router.use(permit("admin"));

router.get('/', catesConttroller.findAll);
router.get('/:id', catesConttroller.findById);
router.post('/', validator(ValidateScheme.addNew), catesConttroller.create);
router.put('/:id', validator(ValidateScheme.updateOne), catesConttroller.update);
router.delete('/:id', catesConttroller.delete);

module.exports = router;