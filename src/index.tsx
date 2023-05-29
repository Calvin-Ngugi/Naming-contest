import { createRoot } from "react-dom/client"

const Header = () => {
    return <div className="header">Naming Contests</div>
};

const App = () => {
  return (
    <div className="container">
        <Header/>
    </div>
  );
};

const container = document.getElementById("app")
const root = createRoot(container)

root.render(<App />);