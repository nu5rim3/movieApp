const Movie = require('../models/movie.model');
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.add = async (req, res, next) => {
    try {
        const data = req.body;
        const newMovie = new Movie(data);
        await newMovie.save();
        if (!newMovie) return next(new Error('Movie does not added'));
        res.status(200).json({
            newMovie
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.getAll = async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        if (!movies) return next(new Error('Movie does not exist'));
        res.status(200).json({
            data: movies
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.get = async (req, res, next) => {
    try {
        const _id = req.params._id;
        const movie = await Movie.findById(_id);
        if (!movie) return next(new Error('Movie does not exist'));
        res.status(200).json({
            data: movie
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.search = async (req, res, next) => {
    try {
        const search = req.params.search;
        const movie = await Movie.find({"name": new RegExp(search)});
        if (!movie) return next(new Error('Movie does not exist'));
        res.status(200).json({
            data: movie
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.update = async (req, res, next) => {
    try {
        const update = req.body
        const _id = req.params._id;
        await Movie.findByIdAndUpdate(_id, update);
        const movie = await Movie.findById(_id)
        res.status(200).json({
            data: movie,
            message: 'Movie has been updated'
        });
    } catch (error) {
        next(error)
    }
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.delete = async (req, res, next) => {
    try {
        const _id = req.params._id;
        await Movie.findByIdAndDelete(_id);
        res.status(200).json({
            data: null,
            message: 'Movie has been deleted'
        });
    } catch (error) {
        next(error)
    }
}