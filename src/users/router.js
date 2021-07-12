const express = require('express');
const router = express.Router();
const validate = require('express-validation');

const UserCont = require('./controller');
const Validator = require('./validator')

router.get('/' , UserCont.findAll);
router.get('/:id', UserCont.findById);
router.post('/', validate(Validator.addNew), UserCont.create);
router.put('/:id',validate(Validator.updateOne), UserCont.update);
router.delete('/:id',validate(Validator.deleteOne),UserCont.delete);

module.exports = router;