import { AppDataSource } from '../../data-source'
import { iAllMovies } from '../../interfaces/movies.interfaces'
import { Movie } from '../../entities/index'

const listMoviesService = async (payload: any): Promise<iAllMovies> => {
    const movieRepo = AppDataSource.getRepository(Movie)

    const page: number = parseInt(payload.page) <= 0 || parseInt(payload.page) > 5 ? 5 : parseInt(payload.page)
    const perPage: number = parseInt(payload.perPage) <= 0 ? 1 : parseInt(payload.perPage)
    const sort: string = payload.sort !== 'price' && payload.sort !== 'duration' ? 'id' : payload.sort
    const order: string = payload.order.toLowerCase() !== 'asc' && payload.order.toLowerCase() !== 'desc' ? 'asc' : payload.order.toLowerCase()

    const movies: Movie[] = await movieRepo.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: {
            id: 'ASC'
        }
    })

    return await movieRepo.find()
}

export default listMoviesService