import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "./api";

export default function TopicButtons(props) {
  // const { topics } = props;
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    api.fetchTopics().then((data) => {
      setTopics(
        data.topics.map((topic) => {
          return topic.slug;
        })
      );
    });
  }, []);
  return (
    <section className="TopicButtons-Section">
      <h3>View articles by topic:</h3>
      {topics.map((topic, index) => {
        return (
          <Link to={`/topics/${topic}`} key={topic}>
            <button className="TopicButtons-Section-Buttons">{`${topic}`}</button>
          </Link>
        );
      })}
    </section>
  );
}
