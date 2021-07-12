const Joi = require('@hapi/joi');

module.exports = {
    addNew:{
        body: {
            name: Joi.string().required().min(3),
            color: Joi.string().min(3)
        }
    },
    updateOne:{
        body:{
            name: Joi.string().required().min(3),
            color: Joi.string().min(3)
        }
    }
}