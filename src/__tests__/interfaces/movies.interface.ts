import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import { Movie } from '../../entities';
import { movieResultSchema } from '../../schemas/movies.schemas';

type iMovieCreate = z.infer<typeof movieResultSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;



export { iMovieCreate, iMovieUpdate, iMovieRepo };