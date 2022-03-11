import ArticleComments from "./ArticleComments";
import ArticleVotes from "./ArticleVotes";

export default function SingleArticleCard({ article }) {
  const correctDate = `${article.created_at.slice(8, 10)}-${article.created_at.slice(5, 7)}-${article.created_at.slice(
    0,
    4
  )}`;

  return (
    <article className="Article-Card-Single">
      <h4 className="H4">{article.title}</h4>
      <dl>
        <dt>By {article.author}</dt>
        <dt>{correctDate}</dt>
        <dt>{article.topic}</dt>
        <p>{article.body}</p>
        <ArticleVotes votes={article.votes} article_id={article.article_id} />
        <dt>Comments: {article.comment_count}</dt>
      </dl>
      <ArticleComments article_id={article.article_id} />
    </article>
  );
}
