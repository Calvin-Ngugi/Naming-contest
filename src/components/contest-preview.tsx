const ContestPreview = ({ contest, onClick }) => {

  const handleClick = (e) => {
    e.preventDefault();
    onClick(contest.id);
  }
  return (
    <div className="contest-preview link" onClick={handleClick}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
