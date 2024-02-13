import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToFavoriteAction } from "../redux/actions";
import { removeToFavoriteAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const isFavorite = favorites.some((favorite) => favorite._id === data._id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      console.log("RIMOSSO DAI PREFERITI");
      dispatch(removeToFavoriteAction(data));
    } else {
      console.log("AGGIUNTO AI PREFERITI");
      dispatch(addToFavoriteAction(data));
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${!data ? data : data.company_name}`}>
          {!data ? data : data.company_name}
        </Link>
      </Col>
      {data && (
        <Col xs={8}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      )}
      <Col xs={1}>
        <i
          onClick={handleFavoriteClick}
          className={`bi bi-star${isFavorite ? "-fill" : ""}`}
        ></i>
      </Col>
    </Row>
  );
};

export default Job;
