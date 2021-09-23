import { useRouter } from 'next/router'

const Posts = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Cachorro {router.query.id}</h1>
    </div>
  )
}

export default Posts
