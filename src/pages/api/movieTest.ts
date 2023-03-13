// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/db';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any> //infer type from prisma
) {
	const apiKey = process.env.MOVIE_DB_KEY;
	const data = await fetch(
		`https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=pokemon&page=1`
	);
	// const providersData = await fetch(
	//   `https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${apiKey}&language=en-US`
	// );
	const response = await data.json();
	// const providerResponse = await providersData.json();
	// console.log('🍿', response);
	const imagePath = 'https://image.tmdb.org/t/p/original/';

	res.status(200).json(response);
}
