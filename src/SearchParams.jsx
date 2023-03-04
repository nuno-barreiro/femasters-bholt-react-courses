import { useState } from "react";

const SearchParams = () => {
  // rule for hooks: have to be created every single time in the same order
  // for example, conditional creation of hooks is not possible
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="eg. Seattle, WA"
            onChange={(evt) => setLocation(evt.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
