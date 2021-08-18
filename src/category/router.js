const express = require('express');
const router = express.Router();

const ValidateScheme = require('./validator');
const validator = require('express-validation');
const catesConttroller = require("./controller");
const admin = require('../admin/controller')
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");

router.route('/auth').post(admin.auth);

router.get('/', catesConttroller.findAll);
router.use(authenticate);
router.use(permit("admin"));

router.get('/:id', catesConttroller.findById);
router.post('/', validator(ValidateScheme.addNew), catesConttroller.create);
router.put('/:id', validator(ValidateScheme.updateOne), catesConttroller.update);
router.delete('/:id', catesConttroller.delete);

module.exports = router;