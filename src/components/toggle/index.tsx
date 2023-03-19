import { useSession } from 'next-auth/react';
import React from 'react';
import ToggleButton from './ToggleButton';

interface ToggleContainerProps {
	movie: {
		id: string;
		title: string;
		poster_path?: string | null;
		watchlist: boolean;
		completed: boolean;
		recommend: boolean;
	};
}

const ToggleContainer = ({ movie }: ToggleContainerProps) => {
	const { data: session } = useSession();
	console.log('❤️‍🔥', movie);
	return (
		<div>
			{session?.user && (
				<>
					<ToggleButton
						id={movie.id}
						title={movie.title}
						img_path={movie.poster_path || ''}
						toggleKey={'watchlist'}
						initialValue={movie.watchlist}
					/>
					<ToggleButton
						id={movie.id}
						title={movie.title}
						img_path={movie.poster_path || ''}
						toggleKey={'completed'}
						initialValue={movie.completed}
					/>
					<ToggleButton
						id={movie.id}
						title={movie.title}
						img_path={movie.poster_path || ''}
						toggleKey={'recommend'}
						initialValue={movie.recommend}
					/>
				</>
			)}
		</div>
	);
};

export default ToggleContainer;
