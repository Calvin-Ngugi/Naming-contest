import { useEffect, useState } from "react";
import { AddNewName, FetchContest } from "../api-client";
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
  };

  const handleNewNameSubmit = async (e) => {
    e.preventDefault();
    const newName = e.target.newName;
    const updatedContest = await AddNewName({
      contestId: contest.id,
      newNameValue: newName.value,
    });
    setContest(updatedContest);
  };

  return (
    <>
      <Header message={contest.contestName} />
      <div className="contest">
        <div className="title">Contest Description</div>
        <div className="description">{contest.description}</div>

        <div className="title">Proposed Names</div>
        <div className="body">
          {contest.names?.length > 0 ? (
            <div className="list">
              {contest.names.map((proposedName) => (
                <div className="item" key={proposedName.id}>
                  {proposedName.name}
                </div>
              ))}
            </div>
          ) : (
            <div>No proposed names yet</div>
          )}
        </div>

        <div className="title">Propose a new name</div>
        <div className="body">
          <form onSubmit={handleNewNameSubmit}>
            <input
              type="text"
              name="newName"
              placeholder="Enter Name"
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <a href="/" className="link" onClick={handleClick}>
          Contest List
        </a>
      </div>
    </>
  );
};

export default Contest;
