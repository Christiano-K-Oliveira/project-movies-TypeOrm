import { AppDataSource } from '../../data-source'
import { Movie } from '../../entities/index'
import { iMovieRequest } from '../../interfaces/movies.interfaces'

const createMovieService = async (movieData: Movie): Promise<iMovieRequest> => {
    const movieRepo = AppDataSource.getRepository(Movie)
    const movie = movieRepo.create(movieData)

    await movieRepo.save(movie)

    return movie
}

export default createMovieService