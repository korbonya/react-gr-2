import { useState, useEffect, Fragment } from "react";
import PostCard from "./components/postCard";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await fetchPosts();
      setPosts(posts);
    }
    getPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  };

 
  return (
    <>
      <header className="pt-4">
        <h1 className="font-bold text-2xl text-center">Liste des posts</h1>
      </header>
      <main className="">
        {posts.length !== 0 ? (
          <div className="px-10 py-8 grid grid-cols-4 gap-2">
            {posts.map((post) => (
              <Fragment key={post.id}>
                <PostCard {...post} />
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h1 className="font-bold text-2xl text-center flex space-x-4">
              <svg
                className="animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 4335 4335"
                width="50"
                height="50"
              >
                <path
                  fill="#008DD2"
                  d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"
                />
              </svg>
            
            </h1>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
