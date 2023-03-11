import React, { useEffect, useState } from 'react';

const FetchExample = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const getMovies = async () => {
			const res = await fetch('/api/prismaTest');
			const json = await res.json();
			setMovies(json);
		};
		getMovies();
	}, []);
	return (
		<div>
			{movies.length > 0 &&
				movies.map((obj, index) => {
					return <h1 key={index}>Title</h1>;
				})}
		</div>
	);
};

export default FetchExample;
