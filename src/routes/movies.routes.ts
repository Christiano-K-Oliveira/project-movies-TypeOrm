import { Router } from 'express'
import { createMovieController, deleteMovieController, listMoviesController, updateMovieController } from '../controllers/movies.controllers'
import checkMovieExists from '../middlewares/checkMovieExists.middleware'

const moviesRoutes: Router = Router()

moviesRoutes.post('', createMovieController)
moviesRoutes.get('', listMoviesController)
moviesRoutes.patch('/:id', checkMovieExists, updateMovieController)
moviesRoutes.delete('/:id', checkMovieExists, deleteMovieController)

export default moviesRoutes