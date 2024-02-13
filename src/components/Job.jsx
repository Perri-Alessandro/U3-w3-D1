import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ADD_TO_FAVORITES, addToFavoriteAction } from "../redux/actions";
import {
  REMOVE_FROM_FAVORITES,
  removeToFavoriteAction,
} from "../redux/actions";

const Job = ({ data, displayTitle = true }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.content);
  const [isFavorite, setIsFavorite] = useState(
    favorites.includes(data.company_name)
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      console.log("RIMOSSO DAI PREFERITI");
      dispatch(removeToFavoriteAction(displayTitle));
    } else {
      console.log("AGGIUNTO AI PREFERITI");
      dispatch(addToFavoriteAction(displayTitle));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${!displayTitle ? data : data.company_name}`}>
          {!displayTitle ? data : data.company_name}
        </Link>
      </Col>
      {displayTitle && (
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
