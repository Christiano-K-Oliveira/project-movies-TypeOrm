import { AppDataSource } from '../../data-source'
import { iAllMovies } from '../../interfaces/movies.interfaces'
import { Movie } from '../../entities/index'
import { Repository } from 'typeorm'
import { allMoviesSchema } from '../../schemas/movies.schemas'

const listMoviesService = async (payload: any): Promise<iAllMovies> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)

    const page: number = payload.page === undefined || parseInt(payload.page) <= 0 || parseInt(payload.page) > 5 ? 5 : parseInt(payload.page)
    const perPage: number = payload.perPage === undefined || parseInt(payload.perPage) <= 1 ? 0 : parseInt(payload.perPage)
    const sort: string = payload.sort === undefined || payload.sort.toLowerCase() !== 'price' && payload.sort.toLowerCase() !== 'duration' ? 'id' : payload.sort
    const order: string = payload.order === undefined || payload.order.toLowerCase() !== 'asc' && payload.order.toLowerCase() !== 'desc' ? 'ASC' : payload.order

    const findMovies: Array<Movie> = await movieRepo.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: {
            id: 'ASC'
        }
    })
    const movies = allMoviesSchema.parse(findMovies)

    return movies
}

export default listMoviesService