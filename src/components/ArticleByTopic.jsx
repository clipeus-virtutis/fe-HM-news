import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import TopicButtons from "./TopicButtons";
import * as api from "./api";

export default function ArticleByTopic() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticlesByTopic(topic).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topic]);
  if (isLoading) return <p>loading...</p>;
  return (
    <section className="Article-Cards">
      {/* <TopicButtons /> */}
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </section>
  );
}
