import { Link } from "react-router-dom";

export default function PostCard({title, body, id}) {
  return (
    <div className="bg-green-200 hover:bg-green-100 px-2 py-1">
      <h2 className="font-bold text-lg text-green-900">
        <span className="text-xl">{id + ". "}</span>
        {title}
      </h2>
      <p>{body}</p>
      <Link to={`/detail/${id}`} className="mt-4 font-semibold text-lg text-blue-600 hover:underline">Voir plus</Link>
    </div>
  );
}
