// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/db';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Movie[]> //infer type from prisma
) {
	const response = await prisma.movie.findMany();

	res.status(200).json(response);
}
