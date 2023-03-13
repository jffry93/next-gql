//this where you would get data from db. Example below
import { mergeObjectWithArray } from '@/utils/mergeObjectWithArray';
import { mergeTwoArrays } from '@/utils/mergeTwoArrays';
import { Resolver, Query, Arg } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { SearchMovieTMDB } from './searchMovieTMDB';
import { SingleTMDB } from './singleTMDB';
import { IMOAttribute, TMDB } from './TMDB';

interface SingleTMDBRes {
  backdrop_path: string | null;
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  id: number;
  overview: string | null;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  tagline: string | null;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface IMOTypes {
  id?: string;
  watchlist: boolean;
  recommend: boolean;
  completed: boolean;
  rating: number;
  comment: string | null;
}

const defaultObj: IMOTypes = {
  watchlist: false,
  recommend: false,
  completed: false,
  rating: 0,
  comment: null,
};

@Resolver(TMDB)
export class TMDBResolver {
  // Get All Popular Movies
  // Get users hot take 🌶️🌶️🌶️ and combine the two
  @Query(() => [TMDB])
  async getPopularMovies(): Promise<Array<TMDB & IMOTypes>> {
    const imagePath = 'https://image.tmdb.org/t/p/original/';
    // Get movies from TMDB
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${'d94def994ec173326a17294a58df1a20'}&language=en-US&page=1`
    );
    const response = await data.json();
    //  Get Opinion from Prisma
    const imo = await prisma.movie.findMany();
    // Update format to send to frontend
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

      const tmdbObj = {
        id: id + '',
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
      return tmdbObj;
    });
    // Add your Opinion
    const moviesWithIMO: Array<TMDB & IMOTypes> = mergeTwoArrays(
      imo as Array<TMDB & IMOTypes>,
      updateResponse,
      'id',
      defaultObj
    );
    // Send spice to front 🌶️🌶️🌶️
    return moviesWithIMO;
  }
  @Query(() => SingleTMDB)
  async getSingleMovie(
    @Arg('movie_id', { nullable: true }) movie_id?: string
  ): Promise<SingleTMDB & IMOTypes> {
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const apiKey = 'd94def994ec173326a17294a58df1a20';
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
    );
    const movie: SingleTMDBRes = await data.json();
    const { backdrop_path, poster_path } = movie;

    const imo: IMOTypes[] = await prisma.movie.findMany();
    const testObj = {
      id: movie.id + '',
      title: movie.title,
      overview: movie.overview,
      backdrop_path: imagePath + backdrop_path,
      poster_path: imagePath + poster_path,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      genres: movie.genres.map((genre) => ({ id: genre.id, name: genre.name })),
      release_date: movie.release_date,
      budget: movie.budget,
      revenue: movie.revenue,
      runtime: movie.runtime,
      status: movie.status,
      tagline: movie.tagline,
    };

    const movieWithIMO = mergeObjectWithArray(testObj, imo, 'id', defaultObj);

    return movieWithIMO;
  }
  @Query(() => [SearchMovieTMDB])
  async searchMovies(
    @Arg('input') input: string
  ): Promise<Array<SearchMovieTMDB>> {
    console.log(input);
    const imagePath = 'https://image.tmdb.org/t/p/original';
    const apiKey = 'd94def994ec173326a17294a58df1a20';
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${input}&page=1&include_adult=false`
    );
    const { results } = await data.json();
    // console.log(results);

    const imo = await prisma.movie.findMany();
    const superArray = mergeTwoArrays(imo, results, 'id', defaultObj);
    const response = superArray.map((obj: any) => {
      console.log(obj.title);
      return {
        completed: obj.completed,
        id: obj.id,
        recommend: obj.recommend,
        watchlist: obj.watchlist,
        title: obj.title,
      };
    });

    return response;
  }
}
