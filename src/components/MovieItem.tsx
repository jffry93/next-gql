import { TMDB } from '@/graphql/schema/TMDB/TMDB';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Rating from './Rating';
import ToggleButton from './ToggleButton';

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
			<ToggleButton id={movie.id} title={'watchlist'} />
			<h3>{movie.title}</h3>
			<Rating
				count={movie.vote_data.vote_count}
				average={movie.vote_data.vote_average}
			/>
			<Image
				src={movie.img_data.poster_path}
				width={600}
				height={600}
				alt={movie.title}
				loader={loaderProp}
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
