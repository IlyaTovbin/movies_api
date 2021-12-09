const Joi = require('joi');

module.exports = function(movie) {
    const schema = Joi.object({
        title: Joi.string().min(2).max(255).required(),
        image_url: Joi.string().min(2).max(255).required(),
        rating: Joi.number().min(0).max(10).required(),
    })
    return schema.validate(movie);
}