import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const checkMovieExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const movieId: number = parseInt(req.params.id)

    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)
    const checkMovieExists = await movieRepo.exist({ where: { id: movieId } })

    if(!checkMovieExists){
        throw new AppError('Movie not found', 404)
    }

    return next()
}

export default checkMovieExists