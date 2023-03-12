import { toggleValue } from '@/graphql/api';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

interface ToggleButtonProps {
	initialValue?: boolean;
	title: string;
	id: string;
}

const ToggleButton = ({
	id,
	title,
	initialValue = false,
}: ToggleButtonProps) => {
	const [value, setValue] = useState(initialValue);
	const handleClick = debounce(() => {
		// console.log('click toggle button');
		mutate({ id, title, value });
	}, 250);

	const { mutate } = useMutation(toggleValue, {
		onSuccess: (data) => {
			setValue(!value);
			console.log('Post created:', data);
		},
		onError: (error) => {
			console.error('Failed to create post:', error);
		},
	});

	return (
		<button
			className={!value ? `text-cyan-500` : `text-purple-700`}
			onClick={handleClick}
		>
			{title}
		</button>
	);
};

export default ToggleButton;
