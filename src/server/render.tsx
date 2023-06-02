import ReactDOMServer from "react-dom/server";
import { FetchContestList, FetchContest } from "../api-client";
import App from "../components/app";

const serverRender = async (req) => {
  const { contestId } = req.params;

  const initialData = contestId
    ? {
        currentContest: await FetchContest(contestId),
      }
    : {
        contests: await FetchContestList(),
      };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );

  return { initialMarkup, initialData };
};

export default serverRender;
