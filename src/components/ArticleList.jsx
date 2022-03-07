import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "./api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles().then((data) => {
      setArticles(Object.values(data.articles));
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>loading...</p>;
  return (
    <section>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </section>
  );
}
