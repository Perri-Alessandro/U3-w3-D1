import { useSelector } from "react-redux";
import Job from "./Job";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.content);
  console.log("aggiunti", favorites);

  return (
    <div>
      <Row className="text-center mt-3">
        <Link className="col text-center" to="/">
          HOME
        </Link>
      </Row>
      <h2 className="text-center mt-3">Favorites Jobs</h2>
      {favorites.map((jobData) => (
        <Job displayTitle={false} key={jobData._id} data={jobData} />
      ))}
    </div>
  );
};

export default Favorite;
