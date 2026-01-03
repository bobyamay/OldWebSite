import { useEffect, useState } from "react";
import PageTitle from "../../Common/PageTitle";
import { BlogPost, fetchBlogPosts } from "./ContentBrogLogic";
import { BrogCard } from "./BrogCard";

export default function ContentBrog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const template = (element : JSX.Element) => {
    return <>
    <div className="main-content-home">
      <PageTitle title="ブログ" />
      <div>
        {element}
      </div>
    </div>
    </>
  }

  if (loading) return template(<div>Loading...</div>);
  if (error) return template(<div className="error-msg">エラー : {error}</div>);

  return (
    template(
      <div>
        {posts.map((post) => (
          <article key={post.id}>
            <BrogCard post={post} />
          </article>
        ))}
      </div>
    )
  );
}
