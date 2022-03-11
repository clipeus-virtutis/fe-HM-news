import { Link } from "react-router-dom";

export default function ArticleCard({ article_id, title, topic, author, body, created_at, votes, comment_count }) {
  const correctDate = `${created_at.slice(8, 10)}-${created_at.slice(5, 7)}-${created_at.slice(0, 4)}`;

  return (
    <article className="Article-Card">
      <Link to={`/articles/${article_id}`}>
        <h4 className="H4">{title}</h4>
      </Link>
      <dl>
        <dt>By {author}</dt>
        <dt>{correctDate}</dt>
        <dt>{topic}</dt>
        <dt>Comments: {comment_count}</dt>
        <dt>Votes: {votes}</dt>
      </dl>
    </article>
  );
}
