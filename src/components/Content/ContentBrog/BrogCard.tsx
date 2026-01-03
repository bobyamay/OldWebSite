import { BlogPost } from "./ContentBrogLogic";
import "./ContentBrog.css";

export function BrogCard({ post }: { post: BlogPost }) {
  return (
    <article className="brog-card">
      <div className="brog-card-title">
        <h3>{post.title}</h3>
      </div>
      <div className="brog-card-date">
        <p>{new Date(post.date).toLocaleDateString()}</p>
      </div>
      <div className="brog-card-content">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
