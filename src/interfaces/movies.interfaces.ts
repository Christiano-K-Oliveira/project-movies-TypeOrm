import { z } from 'zod'
import { allMoviesSchema, movieSchema, movieUpdateSchema } from '../schemas/movies.schemas'

type iMovieRequest = z.infer<typeof movieSchema>
type iUpdateMovie = z.infer<typeof movieUpdateSchema>
type iAllMovies = z.infer <typeof allMoviesSchema>

export { iMovieRequest, iUpdateMovie, iAllMovies }