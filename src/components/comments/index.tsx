import { createComment } from '@/graphql/api';
import { SingleMovie } from '@/pages/movie/[id]';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

export interface CreatePostInputs {
	id: string;
	comment: string;
}
export interface CommentsProps {
	movie: SingleMovie;
	onCommentCreated: () => void;
}

const Comments = ({ movie, onCommentCreated }: CommentsProps) => {
	const [comment, setComment] = useState<undefined | null | string>(
		movie.comment
	);
	const [formData, setFormData] = useState<CreatePostInputs>({
		id: movie.id + '',
		comment: '',
	});
	const { data: session } = useSession();
	const { mutate } = useMutation(createComment, {
		onSuccess: (data) => {
			const {
				createComment: { comment },
			} = data;
			setFormData({ ...formData, comment: '' });
			onCommentCreated();
		},
		onError: (error) => {
			console.error('Failed to create post:', error);
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate(formData);
	};
	return (
		<>
			{session?.user && (
				<form onSubmit={handleSubmit}>
					<input
						value={formData.comment}
						onChange={(e) => {
							setFormData({ ...formData, comment: e.target.value });
						}}
					/>
					<button type='submit'>Create</button>
				</form>
			)}
			{movie.allComments.map((data, index) => {
				return <h1 key={index}>{data.comment}</h1>;
			})}
		</>
	);
};

export default Comments;
