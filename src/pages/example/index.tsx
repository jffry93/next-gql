import { getExamples } from '@/graphql/api';

import { useQuery } from 'react-query';

const Example = () => {
	const { data, isLoading } = useQuery(['examples'], () => getExamples());

	isLoading && <div>Loading...</div>;

	return data?.example.map((object, index) => {
		// console.log(object);
		return (
			<ul key={index} className='nav-items'>
				<li className={index !== 0 ? '' : 'text-violet-500'}>{object.name}</li>
			</ul>
		);
	});
};

export default Example;
