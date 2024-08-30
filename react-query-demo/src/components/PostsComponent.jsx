import { useQuery } from "react-query"


const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
}

const PostsComponent = () => {

    const { data, error, isLoading, refetch } = useQuery('posts', fetchData)

    if (isLoading) {return <div>Loading...</div>;}
    if (error) {return <div>Error loading data</div>;}


  return (
    <div>
        <h1>Posts</h1>
        <button onClick={refetch}>Refetch Posts</button>
        {data.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p></div> ))}
    </div>
  )
}

export default PostsComponent