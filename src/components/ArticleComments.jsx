import { useEffect, useState } from "react";
import * as api from "./api";
import CommentCard from "./CommentCard";

export default function ArticleComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticleComments(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} {...comment} />;
      })}
    </section>
  );
}
