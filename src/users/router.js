const express = require('express');
const router = express.Router();
const validate = require('express-validation');

const admin = require('../admin/controller');
const Validator = require('./validator');
const authenticate = require("../util/authenticate");
const permit = require("../util/permission");
const UserCont = require('./controller');

router.route('/auth').post(UserCont.auth);
router.get('/' , UserCont.findAll);

router.use(authenticate);
router.use(permit("admin"));


router.post('/', validate(Validator.addNew), UserCont.create);
router.get('/:id', UserCont.findById);
router.put('/:id',validate(Validator.updateOne), UserCont.update);
router.delete('/:id',validate(Validator.deleteOne),UserCont.delete);

module.exports = router;