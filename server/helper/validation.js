const Joi = require("joi")

const addUserValidation = (data) => {
    const pattern = /^\S*$/;
    const schema = Joi.object({
        username: Joi.string().min(6).required()
            .regex(RegExp(pattern))
    })
    return schema.validate(data)
}


module.exports.addUserValidation = addUserValidation
