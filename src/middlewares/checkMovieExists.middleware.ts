import { Request, Response, NextFunction } from 'express'
import { AppError } from '../errors'

const checkMovieExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const movieId: number = parseInt(req.params.id)
    
    return next()
}

export default checkMovieExists