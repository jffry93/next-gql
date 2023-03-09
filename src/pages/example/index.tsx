import { getExamples } from '@/graphql/api';

import { useQuery } from 'react-query';

// // Using Server side rendering
// export async function getServerSideProps() {
// 	// fetches data and waits with it until component mounts
// 	const examples = await getExamples();
// 	return { props: { examples } };
// }

const Example = () => {
	const { data, isLoading } = useQuery([''], () => getExamples());

	isLoading && <div>Loading...</div>;

	return data?.example.map((object, index) => {
		// console.log(object);
		return <div key={index}>Party on!!</div>;
	});
};

export default Example;
