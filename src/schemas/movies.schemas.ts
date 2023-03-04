import { z } from 'zod'

const idKey = z.object({
    id: z.number()
})

const movieSchema = z.object({
    name: z.string().max(50),
    description: z.string().optional(),
    duration: z.number(),
    price: z.number()
})

const movieResultSchema = idKey.merge(movieSchema)

const movieUpdateSchema = movieSchema.partial()

const allMoviesSchema = z.array(movieResultSchema)



export { movieSchema, movieUpdateSchema, allMoviesSchema, movieResultSchema }