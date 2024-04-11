import Joi = require("joi");

export const createThreadSchema = Joi.object({
    content: Joi.string().required(),
    image: Joi.string().allow('').optional()
  });