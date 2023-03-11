// Avoid using as much as possible
// If you want to create repetitive variable

// Steps:
// 1. Create class name in global.css file
// 2. Use @apply to include tailwind properties

// Ex.
// .nav-items {
// 	@apply space-y-12 text-2xl text-gray-400;
// }

import React from 'react';

const Parent = () => {
	return (
		<ul className='nav-items'>
			<li className='text-violet-500'>Home</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	);
};

export default Parent;
