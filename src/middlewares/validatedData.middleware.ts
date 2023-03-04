import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from 'zod'

const validatedData = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const validatedData = schema.parse(req.body)
    req.body = validatedData

    return next()
}

export default validatedData