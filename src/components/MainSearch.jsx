import { useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="text-center mt-3">
        <Link className="col" to="/favorites">
          PREFERITI
        </Link>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1 text-center">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading ? (
            <div className="text-center mt-5">
              <Spinner
                animation="border"
                role="status"
                variant="success"
              ></Spinner>
            </div>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
