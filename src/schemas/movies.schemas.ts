import { z } from 'zod'

const idKey = z.object({
    id: z.number()
})

const movieSchema = z.object({
    name: z.string().max(50),
    description: z.string().optional().nullable(),
    duration: z.number().int().gt(0),
    price: z.number().int().gt(0)
})

const movieResultSchema = idKey.merge(movieSchema)

const movieUpdateSchema = movieSchema.partial()

const allMoviesSchema = z.array(movieResultSchema)

const getMoviesResultSchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number() || z.string(),
    data: allMoviesSchema
})


export { movieSchema, movieUpdateSchema, allMoviesSchema, movieResultSchema, getMoviesResultSchema }