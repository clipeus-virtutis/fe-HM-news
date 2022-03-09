import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import TopicFilter from "./TopicFilter";
import * as api from "./api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api.fetchTopics().then((data) => {
      setTopics(
        data.topics.map((topic) => {
          return topic.slug;
        })
      );
    });
    api.fetchArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);
  console.log(topics);
  if (isLoading) return <p>loading...</p>;
  return (
    <section className="Article-Cards">
      <TopicFilter topics={topics} />
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} {...article} />;
      })}
    </section>
  );
}
