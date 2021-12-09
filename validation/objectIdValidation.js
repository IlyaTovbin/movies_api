const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = function(id) {
    const schema = Joi.object({
        id: Joi.objectId().required()
    })
    return schema.validate(id);
}