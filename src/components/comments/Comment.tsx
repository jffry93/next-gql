import Link from 'next/link';
import React from 'react';
interface CommentTypes {
	comment: string | null;
	User?:
		| {
				id: string;
				name?: string | null | undefined;
				image?: string | null | undefined;
		  }
		| null
		| undefined;
}

interface CommentProps {
	data: CommentTypes;
}

const Comment = ({ data }: CommentProps) => {
	return (
		<div>
			<Link href={`/profile/${data.User?.id}`}>{data.User?.name}</Link>
			<p>{data.comment}</p>
		</div>
	);
};

export default Comment;
