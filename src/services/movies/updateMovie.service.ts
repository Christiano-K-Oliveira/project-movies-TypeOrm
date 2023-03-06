import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Movie } from '../../entities'
import { iMovieResult, iUpdateMovie } from '../../interfaces/movies.interfaces'
import { movieResultSchema } from '../../schemas/movies.schemas'

const updateMovieService = async (movieData: iUpdateMovie, idMovie: number): Promise<iMovieResult> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const currentMovie = await movieRepo.findOneBy({ id: idMovie })

    const movie = movieRepo.create({
        ...currentMovie,
        ...movieData
    })
    await movieRepo.save(movie)

    const updatedMovie = movieResultSchema.parse(movie)

    return updatedMovie
}

export default updateMovieService