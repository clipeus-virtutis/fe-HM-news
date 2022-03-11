import { useState } from "react";
import * as api from "./api";

export default function ArticleVotes({ votes, article_id }) {
  const [voteChange, setVoteChange] = useState(0);

  const handleVoteChange = (incVotes) => {
    setVoteChange((currentVoteChange) => {
      return currentVoteChange + incVotes;
    });
    api.patchArticleVotes(article_id, incVotes).catch(() => {
      setVoteChange((currentVoteChange) => {
        return currentVoteChange - incVotes;
      });
    });
  };

  return (
    <div className="ArticleVotes-Votes">
      <button disabled={voteChange > 0} className="ArticleVotes-div-buttons" onClick={() => handleVoteChange(1)}>
        UPVOTE
      </button>
      <p>Votes: {votes + voteChange}</p>
      <button disabled={voteChange < 0} className="ArticleVotes-div-buttons" onClick={() => handleVoteChange(-1)}>
        DOWNVOTE
      </button>
    </div>
  );
}
