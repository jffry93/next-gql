import { singleExample } from '@/graphql/api';
import React from 'react';
import { useQuery } from 'react-query';

interface ParamsType {
	params: { name: string };
}
export async function getServerSideProps({ params }: ParamsType) {
	const posts = await singleExample({ name: params.name });
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

	return <div>Single Example details</div>;
};

export default SingleExample;
