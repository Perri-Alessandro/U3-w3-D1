import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(data._id));

  const handleFavoriteClick = () => {
    if (isFavorite) {
      console.log("RIMOSSO DAI PREFERITI");
      dispatch({
        type: "REMOVE_FROM_FAVORITES",
        payload: data._id,
      });
    } else {
      console.log("AGGIUNTO AI PREFERITI");
      dispatch({
        type: "ADD_TO_FAVORITES",
        payload: data._id,
      });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
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
