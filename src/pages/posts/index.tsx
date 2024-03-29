import { GetStaticProps } from "next"

interface Post {
  id: string,
  title: string
}

interface PostsProps {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await fetch('http://localhost:3333/posts')
  const posts = await response.json()

  return {
    props: {
      posts,
    }
  }
}

export default Posts
