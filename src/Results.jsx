import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          // something that could be done is to use the spread operator to pass all the properties
          // however this is something really implicit that hides details and passes everything
          // including some undesired props if the object is extended in the future
          // thus it is only recommended to be used for truly "pass-through" components
          // <Pet { ...pet } />
          <Pet
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
