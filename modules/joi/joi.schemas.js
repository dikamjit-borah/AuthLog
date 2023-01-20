const Joi = require("joi");

module.exports = {
    schemaSignUp: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        age: Joi.number().required(),
        address: Joi.string().required(),
    }),

    schemaLogIn: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
}