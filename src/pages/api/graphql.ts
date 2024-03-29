import { ApolloServer } from 'apollo-server-micro';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { NextApiRequest, NextApiResponse } from 'next';
import { MovieResolver } from '@/graphql/resolvers/imoDB/movie.resolver';
import { TMDBResolver } from '@/graphql/resolvers/TMDB/index.resolver';
import { getSession } from 'next-auth/react';
import { ContextFunction } from 'apollo-server-core';
import { UserResolver } from '@/graphql/resolvers/imoDB/user.resolver';

export type ContextType = {
	req: NextApiRequest;
	res: NextApiResponse;
};

export const graphqlContext: ContextFunction<{
	req: NextApiRequest;
	res: NextApiResponse;
}> = async ({ req, res }) => {
	const session = await getSession({ req });

	return {
		req,
		res,
		session,
	};
};

const schema = await buildSchema({
	resolvers: [MovieResolver, TMDBResolver, UserResolver],
});

const server = new ApolloServer({ schema, context: graphqlContext });

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
