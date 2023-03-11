import { getMovies } from '@/graphql/api';
import { Movie } from '@prisma/client';
import React from 'react';

interface MovieProps {
	movie: Movie[];
}

export async function getServerSideProps() {
	const movies = await getMovies();
	return {
		props: movies,
	};
}
const query = ({ movie }: MovieProps) => {
	return (
		<div>
			{movie.map((movie, index) => {
				return (
					<div key={index}>
						<h2>{movie.title}</h2>
					</div>
				);
			})}
		</div>
	);
};

export default query;
