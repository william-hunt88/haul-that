import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Map from "./Map";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";
import { GET_JOBS } from "../utils/queries";
import { QUERY_ME_BASIC } from "../utils/queries";

const Jobs = () => {
  const { loading, data } = useQuery(GET_JOBS);
<<<<<<< HEAD
  const { me } = useQuery(QUERY_ME_BASIC);

=======
  
>>>>>>> da85385012b638e796b247c4a0c0f5d6e2584773
  var jobs = [];
  if (!loading) {
    jobs = [data.jobs];
  }

<<<<<<< HEAD
  const pickupHandler = (_id) => {
    console.log(me);
  };
=======
>>>>>>> da85385012b638e796b247c4a0c0f5d6e2584773
  const handleCardRender = () => {
    var cards = [];

    // console.log(jobs[0]);
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!loading) {
      cards = jobs[0].map((job) => {
        // console.log(job);
        return (
          <Card className="cardbody" key={job._id} style={{ width: "17rem" }}>
            <Card.Body>
<<<<<<< HEAD
              <Card.Title>{job.description}</Card.Title>
=======
              <Card.Title>Job # {job.id}</Card.Title>
>>>>>>> da85385012b638e796b247c4a0c0f5d6e2584773
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Distance: {parseInt(job.distance)} miles{" "}
              </ListGroupItem>
              <ListGroupItem>Item Category: {job.category}</ListGroupItem>
              <ListGroupItem>Price: ${job.distance / 2}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button variant="danger" onClick={pickupHandler(job.id)}>
                Accept Job
              </Button>{" "}
            </Card.Body>
          </Card>
        );
      });
    }

    return cards;
  };

  return (
    <div>
      <Map jobs={jobs} loading={loading} />
      <Container className="jobForm">{handleCardRender()}</Container>
    </div>
  );
};

export default Jobs;
