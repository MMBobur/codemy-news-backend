const Joi = require("@hapi/joi");
module.exports = {

  addNew: {
    body: {
      car_id: Joi.string().required(),
      title: Joi.string().required(),
      text: Joi.string().required(),
      author: Joi.string().required(),
      data: Joi.string().required(),
      // image: Joi.string().required(),
    },
  },

  updateOne: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      car_id: Joi.string().required(),
      title: Joi.string().required(),
      text: Joi.string().required(),
      author: Joi.string().required(),
      data: Joi.string().required(),
      // image: Joi.string().required(),
    },
  },

  deleteOne: {
    params: {
      id: Joi.string().required(),
    },
  },
};