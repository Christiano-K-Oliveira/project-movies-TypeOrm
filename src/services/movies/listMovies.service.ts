import { AppDataSource } from '../../data-source'
import { iResultGetMovies } from '../../interfaces/movies.interfaces'
import { Movie } from '../../entities/index'
import { Repository } from 'typeorm'
import { allMoviesSchema } from '../../schemas/movies.schemas'

const listMoviesService = async (payload: any): Promise<iResultGetMovies> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)

    const page: number = payload.page === undefined || isNaN(payload.page) || parseInt(payload.page) <= 1 ? 1 : parseInt(payload.page)
    const perPage: number = payload.perPage === undefined || isNaN(payload.perPage) || parseInt(payload.perPage) <= 0 || parseInt(payload.perPage) > 5 ? 5 : parseInt(payload.perPage)
    const sort: string = payload.sort === undefined || payload.sort.toLowerCase() !== 'price' && payload.sort.toLowerCase() !== 'duration' ? 'id' : payload.sort
    const order: string = payload.order === undefined || payload.sort === undefined || payload.order.toLowerCase() !== 'asc' && payload.order.toLowerCase() !== 'desc' ? 'ASC' : payload.order

    const findMovies: Array<Movie> = await movieRepo.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: {
            [sort]: order
        }
    })
    const findCountAllMovies: Array<Movie> = await movieRepo.find()
    const movies = allMoviesSchema.parse(findMovies)
    const moviesDataResult = {
        prevPage: page <= 1 ? null : `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`,
        nextPage: page >= (findCountAllMovies.length / perPage) ? null : `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`,
        count: findCountAllMovies.length,
        data: movies
    }

    return moviesDataResult
}

export default listMoviesService