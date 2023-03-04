import { Request, Response } from 'express'
import { iMovieRequest, iUpdateMovie } from '../interfaces/movies.interfaces'
import createMovieService from '../services/movies/createMovie.service'
import deleteMovieService from '../services/movies/deleteMovie.service'
import listMoviesService from '../services/movies/listMovies.service'
import updateMovieService from '../services/movies/updateMovie.service'

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movieData: iMovieRequest = req.body
    const newMovie = await createMovieService(movieData)

    return res.status(201).json(newMovie)
}

const listMoviesController = async (req: Request, res: Response): Promise<Response> => {
    const movies = await listMoviesService(req.query)

    return res.status(200).json(movies)
}

const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
    const movieData: iUpdateMovie = req.body
    const idMovie: number = parseInt(req.params.id)

    const updateMovieData = await updateMovieService(movieData, idMovie)

    return res.status(200).json(updateMovieData)
}

const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
    const idMovie: number = parseInt(req.params.id)
    await deleteMovieService(idMovie)

    return res.status(204).send()
}


export { createMovieController, listMoviesController, updateMovieController, deleteMovieController }