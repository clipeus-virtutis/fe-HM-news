export default function CommentCard({ author, body, comment_id, created_at, votes }) {
  const correctDate = `${created_at.slice(8, 10)}-${created_at.slice(5, 7)}-${created_at.slice(0, 4)}`;

  return (
    <article className="CommentCard-Comment">
      <dl>
        <dt>By: {author}</dt>
        <dt>{correctDate}</dt>
        <br />
        <dt></dt>
        <dt>{body}</dt>
        <br />
        <dt>Votes: {votes}</dt>
      </dl>
    </article>
  );
}
