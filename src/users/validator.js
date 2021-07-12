const Joi = require('@hapi/joi');

module.exports = {
    auth:{
        body:{
            username:Joi.string().required(),
            password:Joi.string().required()
        }
    },
    addNew:{
        body:{
            login:Joi.string().required(),
            password:Joi.string().required(),
            username:Joi.string().required()
        }
    },
    updateOne:{
        params:{
            id:Joi.string().required(),
        },
        body:{
            login:Joi.string().required(),
            password:Joi.string().required(),
            username:Joi.string().required()
        }
    },
    deleteOne:{
        params:{
            id:Joi.string().required()
        }
    }
}