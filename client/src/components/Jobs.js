import React from "react";
import { Card, ListGroup, ListGroupItem , Button } from "react-bootstrap";
import Map from "./Map";

function Jobs() {
  return (
    <div>
<Map />
    <Card class="cardbody" style={{ width: "13rem" }}>
      <Card.Body>
        <Card.Title>Job #1</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Distance: </ListGroupItem>
        <ListGroupItem>Item Category: </ListGroupItem>
        <ListGroupItem>Price: </ListGroupItem>
      </ListGroup>
      <Card.Body>
      <Button variant="danger">Accept Job</Button>{' '} 
      </Card.Body>
    </Card>
  </div>
  );
}

export default Jobs;
