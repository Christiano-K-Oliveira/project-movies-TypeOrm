import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import { allMoviesSchema, movieResultSchema, movieSchema, movieUpdateSchema,  } from '../schemas/movies.schemas'

type iMovieRequest = z.infer<typeof movieSchema>
type iMovieResult = z.infer<typeof movieResultSchema>
type iUpdateMovie = DeepPartial<iMovieResult>
type iAllMovies = z.infer <typeof allMoviesSchema>

export { iMovieRequest, iUpdateMovie, iAllMovies,iMovieResult }