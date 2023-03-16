import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    // while enabling strict mode seems a good thing to do because it gives additional warnings during development
    // in React v18 it runs twice the application initialization function, to ensure it is truly stateless
    // thus it is disabled to prevent double requests to the APIs for this project
    // <StrictMode></StrictMode>
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

// the new ReactDOM.createRoot(container) was introduced in React 18
// and brings some new concurrency features.
// no need to ReactDOM.render(container, <App />) unless for legacy reasons
const root = createRoot(container);
root.render(<App />);
