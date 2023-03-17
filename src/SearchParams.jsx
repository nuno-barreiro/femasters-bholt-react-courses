import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // rule for hooks: have to be created every single time in the same order
  // for example, conditional creation of hooks is not possible
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          const formData = new FormData(evt.target);
          // this is an example of "uncontrolled forms"
          // means that some fields are not tracked with useState
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="eg. Seattle, WA" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            disabled={ANIMALS.length === 0}
            onChange={(evt) => {
              setAnimal(evt.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" disabled={breeds.length === 0}>
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
