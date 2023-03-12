import React from 'react';
import ToggleButton from './ToggleButton';

interface ToggleContainerProps {
	movie: {
		id: string;
		watchlist: boolean;
		completed: boolean;
		recommend: boolean;
	};
}

const ToggleContainer = ({ movie }: ToggleContainerProps) => {
	return (
		<div>
			<ToggleButton
				id={movie.id}
				title={'watchlist'}
				initialValue={movie.watchlist}
			/>
			<ToggleButton
				id={movie.id}
				title={'completed'}
				initialValue={movie.completed}
			/>
			<ToggleButton
				id={movie.id}
				title={'recommend'}
				initialValue={movie.recommend}
			/>
		</div>
	);
};

export default ToggleContainer;
