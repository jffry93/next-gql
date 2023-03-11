import React from 'react';

const Responsive = () => {
	return (
		<div className='border-2 border-solid border-cyan-50 md:border-dotted'>
			<ul className='flex flex-col justify-center gap-16 md:flex-row'>
				<li>Home</li>
				<li>Shop</li>
				<li>About</li>
				<li>Contact</li>
				<li>FAQ</li>
			</ul>
		</div>
	);
};

export default Responsive;
