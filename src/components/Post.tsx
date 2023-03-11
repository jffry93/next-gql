import { Post } from '@/pages/post';
import React from 'react';

interface PostProps {
  data: Post;
}

const Post = ({ data }: PostProps) => {
  const { description, title } = data;
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Post;
