import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="app">
      <h1>Adopt Me!</h1>
      <Pet name="Nala" animal="Dog" breed="German shepperd" />
      <Pet name="Fluffy" animal="Cat" breed="Common European" />
    </div>
  );
};

const container = document.getElementById("root");

// the new ReactDOM.createRoot(container) was introduced in React 18
// and brings some new concurrency features.
// no need to ReactDOM.render(container, <App />) unless for legacy reasons
const root = createRoot(container);
root.render(<App />);
