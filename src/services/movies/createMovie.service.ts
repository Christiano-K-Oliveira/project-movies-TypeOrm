import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Movie } from '../../entities'
import { iMovieRequest, iMovieResult } from '../../interfaces/movies.interfaces'
import { movieResultSchema } from '../../schemas/movies.schemas'

const createMovieService = async (movieData: iMovieRequest): Promise<iMovieResult> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const movie = movieRepo.create(movieData)

    await movieRepo.save(movie)

    const newMovie = movieResultSchema.parse(movie)

    return newMovie
}

export default createMovieService