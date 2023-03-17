import { TMDB } from '@/graphql/resolvers/TMDB/schemas/TMDB';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Rating from './Rating';
import ToggleContainer from './toggle';

interface MovieProps {
	movie: TMDB;
}

const MovieItem = ({ movie }: MovieProps) => {
	const router = useRouter();
	//needed to use image with fetched url
	const loaderProp = ({ src }: any) => {
		return src;
	};
	return (
		<div>
			{/* <ToggleContainer movie={movie} /> */}

			<h3>{movie.title}</h3>
			<Rating
				count={movie.vote_data.vote_count}
				average={movie.vote_data.vote_average}
			/>
			<img
				src={movie.img_data.poster_path}
				alt={movie.title}
				// width={600}
				// height={600}
				// loader={loaderProp}
				// priority
			/>
			<button
				onClick={() => {
					router.push('/movie/' + movie.id);
				}}
			>
				Overview
			</button>
		</div>
	);
};

export default MovieItem;
