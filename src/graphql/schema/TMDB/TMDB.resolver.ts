//this where you would get data from db. Example below
import { Resolver, Query } from 'type-graphql';
import { TMDB } from './TMDB';

@Resolver(TMDB)
export class TMDBResolver {
  //get all items
  @Query(() => [TMDB])
  async getPopularMovies(): Promise<TMDB[]> {
    const imagePath = 'https://image.tmdb.org/t/p/original/';
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${'d94def994ec173326a17294a58df1a20'}&language=en-US&page=1`
    );
    const response = await data.json();
    const updateResponse = response.results.map((element: any) => {
      const {
        id,
        title,
        overview,
        backdrop_path,
        poster_path,
        vote_average,
        vote_count,
        release_date,
      } = element;
      return {
        id,
        title,
        overview,
        img_data: {
          backdrop_path: imagePath + backdrop_path,
          poster_path: imagePath + poster_path,
        },
        vote_data: {
          vote_average,
          vote_count,
        },
        release_date,
      };
    });

    return updateResponse;
  }
}
