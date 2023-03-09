import { dogByName, queryClient, singleExample } from '@/graphql/api';
import React from 'react';
import { useQuery } from 'react-query';

interface ParamsType {
	params: { name: string };
}
export async function getServerSideProps({ params }: ParamsType) {
	const res = await queryClient.prefetchQuery('singleExample', () =>
		singleExample({ name: params.name })
	);
	return {
		props: {
			name: params.name,
		},
	};
}

const SingleExample: React.FunctionComponent<{
	name: string;
}> = ({ name }) => {
	const { data } = useQuery('singleExample', () => singleExample({ name }));
	// console.log(data);
	return <div>Single Example details</div>;
};

export default SingleExample;