import React from 'react';

// hover === during hover
// focus === post click
// active === during click

// transition & duration... wow 🤯

const Animation = () => {
	return (
		<div>
			<button className='px-8 py-4 transition-colors duration-500 bg-teal-500 rounded-md hover:bg-teal-300 focus:bg-teal-700 active:bg-teal-900'>
				Animation
			</button>
		</div>
	);
};

export default Animation;
