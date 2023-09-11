import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


export default function DetailPost() {
  const { id } = useParams();
  const [input, setInput] = useState("");
  // const [post, setPosts] = useState({})
  const {data:post, loading:loadPost, error:errorPost} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  // const [user , setUser] = useState({})
  let skip = post? false : true
  const {data:user, loading: loadUser, error: errorUser} = useFetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`, skip)


   if(loadPost || loadUser){
    return    <div className="flex justify-center items-center h-screen">
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
   }

   if(errorPost || errorUser){
    return <div>
      <h1>Une erreur est survenue</h1>
    </div>
    }


  return (
    <div className="bg-green-50 min-h-screen w-full">
      <div>
        <h1 className="font-bold text-2xl text-center">{user?.name}</h1>
        <h2 className=" text-xl text-center">{user?.email}</h2>
        <h2 className=" text-xl text-center">{user?.phone}</h2>
      </div>
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

