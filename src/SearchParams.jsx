import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import useBreedList from "./useBreedList";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";

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
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="mb-10 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-10 shadow-lg"
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
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="eg. Seattle, WA"
            className="search-input"
          />
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
            className="search-input"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            disabled={breeds.length === 0}
            className="search-input grayed-out-disabled"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50 ">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
