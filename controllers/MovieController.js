const express = require('express');
const router = express.Router();
const { Movie } = require('../models/Movie');
const movieValidation = require('../validation/movieValidation');
const idValidation = require('../validation/objectIdValidation');

router.get('/:term?', async (req, res) => {
    const term = req.params.term ? { title: { $regex: '.*' + req.params.term + '.*', $options: 'i' } } : {}
    const movies = await Movie.find(term).sort({ created_at: -1 });

    if(!movies) return res.json({ "success": false })

    return res.json({ "success": true, "data": movies})
})

router.post('/', async(req, res) => {
    const { error } = movieValidation(req.body)
    if(error) return res.json({ "success": false, "message" : error.details[0].message })
    const movie = new Movie(req.body)
    await movie.save();
    return res.json({ "success": true, "message" : 'New Movie saved successfully' } );
})

router.put('/:id', async(req, res) => {
    const { error } = idValidation({ id: req.params.id });
    if(error) return res.status(400).send(error.details[0].message)

    const movie = await Movie.findById(req.params.id);
    if(!movie) return res.status(404).send('Movie not Found')

    const result = await Movie.findByIdAndUpdate(req.params.id, {
        likes: movie.likes ? ++movie.likes : 1
    }, { new: true })

    return res.send(result);
})

module.exports = router;