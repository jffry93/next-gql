import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/graphql/api';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { SessionProvider } from 'next-auth/react';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</QueryClientProvider>
	);
}
