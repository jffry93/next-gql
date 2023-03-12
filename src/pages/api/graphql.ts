import { ApolloServer } from 'apollo-server-micro';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { NextApiRequest, NextApiResponse } from 'next';
import { ExampleResolver } from '@/graphql/schema/example/example.resolver';
import { PostResolver } from '@/graphql/schema/post/post.resolver';
import { MovieResolver } from '@/graphql/schema/movie/movie.resolver';
import { TMDBResolver } from '@/graphql/schema/TMDB/TMDB.resolver';

const schema = await buildSchema({
  resolvers: [ExampleResolver, PostResolver, MovieResolver, TMDBResolver],
});

const server = new ApolloServer({ schema });

//stop the default body parser since its a graphql endpoint
export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
