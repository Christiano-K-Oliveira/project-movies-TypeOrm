import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import { allMoviesSchema, getMoviesResultSchema, movieResultSchema, movieSchema, movieUpdateSchema } from '../schemas/movies.schemas'

type iMovieRequest = z.infer<typeof movieSchema>
type iMovieResult = z.infer<typeof movieResultSchema>
type iUpdateMovie = DeepPartial<typeof movieUpdateSchema>
type iAllMovies = z.infer<typeof allMoviesSchema>
type iResultGetMovies = z.infer<typeof getMoviesResultSchema>

export { iMovieRequest, iUpdateMovie, iAllMovies, iResultGetMovies, iMovieResult }