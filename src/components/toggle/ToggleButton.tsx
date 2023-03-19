import { toggleValue } from '@/graphql/api';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

interface ToggleButtonProps {
	initialValue?: boolean;
	toggleKey: string;
	id: string;
	title: string;
	img_path: string;
}

const ToggleButton = ({
	id,
	title,
	img_path,
	toggleKey,
	initialValue = false,
}: ToggleButtonProps) => {
	const [value, setValue] = useState(initialValue);

	const handleClick = debounce(() => {
		mutate({ id: id + '', title, img_path, toggleKey, toggleValue: value });
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
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);
	return (
		<button
			className={!value ? `text-cyan-500` : `text-purple-700`}
			onClick={handleClick}
		>
			{toggleKey}
		</button>
	);
};

export default ToggleButton;
