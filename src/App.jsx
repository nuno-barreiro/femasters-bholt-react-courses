import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="app">
      <h1>Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

const container = document.getElementById("root");

// the new ReactDOM.createRoot(container) was introduced in React 18
// and brings some new concurrency features.
// no need to ReactDOM.render(container, <App />) unless for legacy reasons
const root = createRoot(container);
root.render(<App />);
