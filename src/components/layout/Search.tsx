import React, { useState, ChangeEvent, useCallback, useRef } from 'react';
import throttle from 'lodash/throttle';
import { searchMovies } from '@/graphql/api';
import { SearchMovieTmdb } from '@/generated/graphql';
import { useRouter } from 'next/router';

const Search = () => {
	const [inputValue, setInputValue] = useState('');
	const [dropdown, setDropdown] = useState<SearchMovieTmdb[]>([]);
	const router = useRouter();
	const throttledHandleChange = useRef(
		throttle(
			async (value: string) => {
				const data = await searchMovies({ input: value });
				setDropdown(data.searchMovies);
			},
			250,
			{ leading: false, trailing: true }
		)
	).current;

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value);
			throttledHandleChange(e.target.value);
		},
		[throttledHandleChange]
	);

	const handleSelectMovie = (movie: SearchMovieTmdb) => {
		router.push('/movie/' + movie.id);
		setDropdown([]);
		setInputValue('');
	};

	return (
		<>
			<input value={inputValue} onChange={handleChange} />
			<ul>
				{dropdown.length > 0 &&
					dropdown.map((movie) => {
						return (
							<li
								key={movie.id}
								onClick={() => {
									handleSelectMovie(movie);
								}}
								className={
									movie.watchlist ? `text-cyan-500` : `text-purple-700`
								}
							>
								{movie.title}
							</li>
						);
					})}
			</ul>
		</>
	);
};

export default Search;
