import { createComment } from '@/graphql/api';
import { SingleTMDB } from '@/graphql/schema/TMDB/SingleTMDB';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

export interface CreatePostInputs {
	id: string;
	comment: string;
}
export interface CommentsProps {
	movie: SingleTMDB;
}

const Comments = ({ movie }: CommentsProps) => {
	const [comment, setComment] = useState<null | string>(movie.comment);
	const [formData, setFormData] = useState<CreatePostInputs>({
		id: movie.id,
		comment: '',
	});

	const { mutate } = useMutation(createComment, {
		onSuccess: (data) => {
			const {
				createComment: { comment },
			} = data;
			setFormData({ ...formData, comment: '' });
			setComment(formData.comment);
		},
		onError: (error) => {
			console.error('Failed to create post:', error);
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('...mutate data?', formData.comment);

		mutate(formData);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					value={formData.comment}
					onChange={(e) => {
						setFormData({ ...formData, comment: e.target.value });
					}}
				/>
				<button type='submit'>Create</button>
			</form>
			{comment && <div>{comment}</div>}
		</>
	);
};

export default Comments;
