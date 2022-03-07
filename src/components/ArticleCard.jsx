import { Link } from "react-router-dom";

export default function ArticleCard({ article_id, title, topic, author, body, created_at, votes, comment_count }) {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
    </article>
  );
}
