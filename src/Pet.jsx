import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, location, id, images }) => {
  let hero = images.length
    ? images[0]
    : "http://pets-images.dev-apis.com/pets/none.jpg";

  return (
    // Link instead of <a /> to avoid refreshing the whole page
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}{" "}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
