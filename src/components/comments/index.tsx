import { createComment } from '@/graphql/api';
import { SingleMovie } from '@/pages/movie/[id]';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Comment from './Comment';

export interface CreatePostInputs {
	id: string;
	title: string;
	img_path: string;
	comment: string;
}
export interface CommentsProps {
	movie: SingleMovie;
	onCommentCreated: () => void;
}

const Comments = ({ movie, onCommentCreated }: CommentsProps) => {
	const [formData, setFormData] = useState<CreatePostInputs>({
		id: movie.id + '',
		title: movie.title,
		img_path: movie.poster_path || 'no img in database',
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
				return <Comment key={data.User?.name} data={data} />;
			})}
		</>
	);
};

export default Comments;
