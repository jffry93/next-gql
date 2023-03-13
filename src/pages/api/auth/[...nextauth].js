import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prismadb';

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		// ...add more providers here
	],
	database: process.env.DATABASE_URL,
};

export default NextAuth(authOptions);
