import { getSingleMovie } from '@/graphql/api';
import React from 'react';
import { useQuery } from 'react-query';

interface ParamsType {
  params: { id: string };
}

export async function getServerSideProps({ params }: ParamsType) {
  // const movieDetail = await fetch('http://localhost:3000/api/movieTest');
  console.log(params);
  const popularMovies = await getSingleMovie({ movie_id: params.id });
  //   console.log(movieDetail);
  return {
    props: { params },
  };
}

const MovieDetail = ({ params }: ParamsType) => {
  // const { data } = useQuery('singleExample', () =>
  //   getSingleMovie({ movie_id: params.id })
  // );
  // console.log(data);
  return <div>MovieDetail</div>;
};

export default MovieDetail;
