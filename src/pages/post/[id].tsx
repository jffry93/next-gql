import Post from '@/components/Post';
import { singlePost } from '@/graphql/api';
import React from 'react';

interface ParamsType {
  params: { id: string };
}
export async function getServerSideProps({ params }: ParamsType) {
  const post = await singlePost({ id: params.id });
  return {
    props: {
      id: params.id,
      data: post.singlePost,
    },
  };
}

const SinglePost = ({ id, data }: { id: string; data: Post[] }) => {
  if (data.length < 1) {
    return <div>Post Does Not Exist</div>;
  }
  return (
    <div>
      <Post data={data[0]} />
    </div>
  );
};

export default SinglePost;
