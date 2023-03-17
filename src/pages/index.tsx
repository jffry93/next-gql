import MovieItem from '@/components/MovieItem';
import { getPopularMovies } from '@/graphql/api';
import { TMDB } from '@/graphql/resolvers/TMDB/TMDB';
import Head from 'next/head';

interface HomeProps {
	popularMovies: TMDB[];
}

export async function getServerSideProps() {
	const popularMovies = await getPopularMovies();

	return {
		props: { popularMovies: popularMovies.getPopularMovies },
	};
}

export default function Home({ popularMovies }: HomeProps) {
	return (
		<>
			<Head>
				<title>Movie App | Home</title>
			</Head>
			<h1 className='flex text-3xl font-bold'>🍿 Popular Movies 🎥</h1>
			<div>
				{popularMovies.map((movie) => {
					return <MovieItem key={movie.id} movie={movie} />;
				})}
			</div>
		</>
	);
}
