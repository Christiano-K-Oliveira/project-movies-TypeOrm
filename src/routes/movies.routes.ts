import { Router } from 'express'
import { createMovieController, deleteMovieController, listMoviesController, updateMovieController } from '../controllers/movies.controllers'
import checkMovieExists from '../middlewares/checkMovieExists.middleware'
import checkNameMovieExists from '../middlewares/checkNameMovieExists.middleware'
import validatedData from '../middlewares/validatedData.middleware'
import { movieSchema, movieUpdateSchema } from '../schemas/movies.schemas'

const moviesRoutes: Router = Router()

moviesRoutes.post('', validatedData(movieSchema), checkNameMovieExists, createMovieController)
moviesRoutes.get('', listMoviesController)
moviesRoutes.patch('/:id', validatedData(movieUpdateSchema), checkMovieExists, checkNameMovieExists, updateMovieController)
moviesRoutes.delete('/:id', checkMovieExists, deleteMovieController)

export default moviesRoutes