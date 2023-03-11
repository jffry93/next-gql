import { createPost, getPosts } from '@/graphql/api';
import Link from 'next/link';
import { useState } from 'react';
import { useMutation } from 'react-query';

export interface Post {
  id: number;
  title: string;
  description: string;
}
interface PostPageProps {
  posts: Post[];
}

export interface CreatePostInputs {
  title: string;
  description: string;
}

const AllPosts = ({ posts }: PostPageProps) => {
  return (
    <div>
      {posts.map((object, index) => {
        const { description, id, title } = object;
        return (
          <div key={index}>
            <Link href={`/post/${id}`}>
              <h2>{title}</h2>
              <p>{description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

// get all posts before the client loads
export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    props: { posts: posts.allPosts },
  };
}

const PostPage = ({ posts }: PostPageProps) => {
  const [postState, setPostState] = useState<Post[]>(posts);
  const [formData, setFormData] = useState<CreatePostInputs>({
    title: '',
    description: '',
  });
  const { mutate } = useMutation(createPost, {
    onSuccess: (data) => {
      console.log('Post created:', data);
      setPostState([...postState, data.createPost as unknown as Post]);
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
    <div>
      <h2>All posts:</h2>
      <AllPosts posts={postState} />
      <form onSubmit={handleSubmit}>
        <input
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <input
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default PostPage;
