import { Link } from "react-router-dom";

export default function TopicButtons(props) {
  const { topics } = props;
  return (
    <section className="TopicButtons-Section">
      <h3>Filter articles by:</h3>
      {topics.map((topic, index) => {
        return (
          <Link to={`/articles/${topic}`} key={topic}>
            <button className="TopicButtons-Section-Buttons">{`${topic}`}</button>
          </Link>
        );
      })}
    </section>
  );
}
