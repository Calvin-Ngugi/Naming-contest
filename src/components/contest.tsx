import { useEffect, useState } from "react";
import { FetchContest } from "../api-client";
import Header from "./header";

const Contest = ({ initialContest, onContestListClick }) => {
  const [contest, setContest] = useState(initialContest);

  useEffect(() => {
    if (!contest.names) {
      FetchContest(contest.id).then((contest) => {
        setContest(contest);
      });
    }
  }, [contest.id, contest.names]);

  const handleClick = (e) => {
    e.preventDefault();
    onContestListClick();
  }

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>

        <a href="/" className="link" onClick={handleClick}>Contest List</a>
      </div>
    </>
  );
};

export default Contest;
