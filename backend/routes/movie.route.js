const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const movieController = require('../controllers/movie.controller');
const userController = require('../controllers/user.controller');


// @url           GET /movie/get
// @description   get movie details
// @access-mode   private-basic
router.get('/get/:_id', auth, movieController.get)

// @url           PUT /movie/search
// @description   search movie details
// @access-mode   private-basic
router.post('/search/:search', auth, movieController.search)

// @url           GET /movie/getall
// @description   get all movies 
// @access-mode   private-basic
router.get('/getall', auth, movieController.getAll)

// @url           GET /movie/get
// @description   get movie details
// @access-mode   private-basic
router.post('/add', auth, movieController.add)

// @url           PUT /movie/update
// @description   update movie details
// @access-mode   private-basic
router.put('/update/:_id', auth, movieController.update)

// @url           GET /movie/delete
// @description   delete movie 
// @access-mode   private-basic
router.delete('/delete/:_id', auth, movieController.delete)

module.exports = router;