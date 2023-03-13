import ToggleContainer from '@/components/toggle';
import { getSingleMovie } from '@/graphql/api';
import { SingleTMDB } from '@/graphql/schema/TMDB/singleTMDB';
import Image from 'next/image';
import React from 'react';

interface ParamsType {
  params: { id: string };
}
interface MovieDetailProps {
  movie: SingleTMDB;
}

export async function getServerSideProps({ params }: ParamsType) {
  const movieDetail = await getSingleMovie({ movie_id: params.id });
  return {
    props: { movie: movieDetail.getSingleMovie },
  };
}

const MovieDetail = ({ movie }: MovieDetailProps) => {
  // console.log(movie);
  const loaderProp = ({ src }: any) => {
    return src;
  };
  return (
    <div>
      <ToggleContainer movie={movie} />
      <h1>{movie.title}</h1>
      <h2>{movie.tagline}</h2>
      <Image
        src={movie?.poster_path ? movie?.poster_path : ''}
        width={600}
        height={600}
        alt={movie.title}
        loader={loaderProp}
      />
    </div>
  );
};

export default MovieDetail;
