import Comments from '@/components/comments';
import ToggleContainer from '@/components/toggle';
import { getSingleMovie } from '@/graphql/api';
import { SingleTMDB } from '@/graphql/resolvers/TMDB/schemas/SingleTMDB';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

export interface SingleMovie {
	id: string;
	revenue: number;
	runtime?: number | null;
	status: string;
	tagline?: string | null;
	title: string;
	overview?: string | null;
	genres?: {
		id: number;
		name: string;
	}[];
	backdrop_path?: string | null;
	poster_path?: string | null;
	vote_average: number;
	vote_count: number;
	release_date: string;
	budget: number;
	watchlist: boolean;
	recommend: boolean;
	completed: boolean;
	rating: number;
	comment?: string | null;
	allComments: {
		comment: string | null;
		User?: {
			name: string | null;
			image: string | null;
		} | null;
	}[];
}
interface ParamsType {
	params: { id: string };
}
interface MovieDetailProps {
	movie: SingleTMDB;
}

export async function getServerSideProps({ params }: ParamsType) {
	const movieDetail = await getSingleMovie({ movie_id: params.id });

	return {
		props: { movie: movieDetail.getSingleMovie, params },
	};
}

const MovieDetail = ({ params }: MovieDetailProps & ParamsType) => {
	const [movie, setMovie] = useState<SingleMovie | undefined>(undefined);
	const [toggleState, setToggleState] = useState(false);
	const onCommentCreated = () => {
		setToggleState(!toggleState);
	};
	useEffect(() => {
		const fetchMovie = async () => {
			const data = await getSingleMovie({ movie_id: params.id });

			let obj = data?.getSingleMovie;
			if (obj) {
				const genres = obj.genres.map((genre) => ({
					...genre,
					id: Number(genre.id),
				}));
				setMovie({
					...obj,
					genres,
				});
			}
		};
		fetchMovie();
	}, [params.id, toggleState]);

	if (!movie) {
		return <div>Loading...</div>;
	}

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

			<Comments movie={movie} onCommentCreated={onCommentCreated} />
		</div>
	);
};

export default MovieDetail;
