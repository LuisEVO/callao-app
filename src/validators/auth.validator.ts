import Joi from '@hapi/joi';

const schemas = {
  GET_SIGN_IN: {
    params: Joi.object({
      phone: Joi.number().required(),
    }),
  },
  POST_SIGN_IN: {
    params: Joi.object({
      phone: Joi.number().required(),
    }),
    body: Joi.object({
      validationCode: Joi.number().required(),
    })
  },
  SIGN_UP: {
    body: Joi.object({
      nick: Joi.string().required(),
      phone: Joi.number().required(),
    }),
  },
};

export default schemas;
