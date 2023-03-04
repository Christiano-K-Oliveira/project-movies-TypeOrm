import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../errors'

const checkNameMovieExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie)

    if(req.body.name){
        const checkNameMovieExists = await movieRepo.exist({ where: { name: req.body.name } })
        
        if(checkNameMovieExists){
            throw new AppError('Movie already exists.', 409)
        }
    }


    return next()
}

export default checkNameMovieExists