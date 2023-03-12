// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../prisma/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> //infer type from prisma
) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${'d94def994ec173326a17294a58df1a20'}&language=en-US&page=1`
  );
  const response = await data.json();
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  response.results.forEach((element: any, index: number) => {
    // id
    // title
    // overview
    // img_data {
    //   backdrop_path
    //   poster_path
    // }
    // vote_data {
    //   vote_average
    //   vote_count
    // }
    // release_date

    const {
      id,
      title,
      overview,
      backdrop_path,
      poster_path,
      vote_average,
      vote_count,
      release_date,
    } = element;
    if (index === 0) {
      console.log({
        id,
        title,
        overview,
        img_data: {
          backdrop_path,
          poster_path,
        },
        vote_data: {
          vote_average,
          vote_count,
        },
        release_date,
      });
      console.log('poster', imagePath + element.poster_path);
      console.log('backdrop', imagePath + element.backdrop_path);
    }
  });

  res.status(200).json(response);
}
