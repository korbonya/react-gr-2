import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailPost() {
  const { id } = useParams();
  const [input, setInput] = useState("");
  const [post, setPosts] = useState({})
  const fetchPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  };

    useEffect(() => {
        async function getPost() {
            const post = await fetchPost();
            setPosts(post);
        }
        getPost();
        }, [id]);


  return (
    <div className="bg-green-50 min-h-screen w-full">
      <h1 className="font-bold text-2xl">Voici les details du post</h1>
        <div className="flex space-x-4">
      <div className="bg-green-200 hover:bg-green-100 px-2 py-1">
        <h2 className="font-bold text-lg text-green-900">
          <span className="text-xl">{post?.id}. </span>
          {post?.title}
        </h2>
        <p>{post?.body}</p>
      </div>
    </div>
    </div>
    );
}

