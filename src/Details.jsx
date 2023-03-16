import { useParams } from "react-router-dom";

const Details = () => {
  // information from useParams comes from the context inject by BrowserRouter
  const { id } = useParams();

  return <h2>Details of Pet {id}</h2>;
};

export default Details;
