import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleArticleCard from "./SingleArticleCard";
import * as api from "./api";

export default function IndividualArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchSingleArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <section className="Article-Cards">
        <SingleArticleCard article={article} />
      </section>
    </>
  );
}
