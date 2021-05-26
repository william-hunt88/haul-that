import React, { useState } from "react";
import { Button, Form, Container, Col, Row } from "react-bootstrap";
import history from "../../history";
import "./booking.css";
import { useMutation } from "@apollo/react-hooks";
import { ADD_JOB } from "../utils/mutation";
import Auth from "../utils/auth";

const BookingA = () => {
  const [formState, setFormState] = useState({
    quantity: "0",
    category: "",
    description: "",
    addressP: "",
    addressP2: "",
    cityP: "",
    stateP: "",
    zipP: "",
    latP: "",
    lngP: "",
    addressD: "",
    addressD2: "",
    cityD: "",
    stateD: "",
    zipD: "",
    latD: "",
    lngD: "",
    distance: "",
  });

  const [addJob, { error }] = useMutation(ADD_JOB);

  //   addJob({
  //       variables: {...formState, distance: routeDistance, price: jobPrice}
  //   })

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async (event) => {
    console.log(formState)
    
    fetch(
      `http://www.mapquestapi.com/directions/v2/route?key=ejlJ5TZ16qwyxA1YWDLZwhdPp6eTt2qA&from=${formState.addressP} ${formState.cityP}, ${formState.stateP} ${formState.zipP}}&to=${formState.addressD} ${formState.cityD}, ${formState.stateD} ${formState.zipD}`,
      {}
    ).then(function (response) {
      if (response.ok) {
        response.json().then(function (routeInfo) {
          console.log(routeInfo.route.distance);
        });
      }
    });

    let job = {
      quantity: formState.quantity,
      category: formState.category,
      description: formState.description,
      pickup: {
        address: formState.addressP,
        address2: formState.addressP2,
        city: formState.cityP,
        state: formState.stateP,
        zip: formState.zipP,
        lat: formState.latP,
        lng: formState.lngP,
      },
      dropoff: {
        address: formState.addressD,
        address2: formState.addressD2,
        city: formState.cityD,
        state: formState.stateD,
        zip: formState.zipD,
        lat: formState.latD,
        lng: formState.lngD,
      },
      distance: 0,
    };
    event.preventDefault();

    console.log(formState);

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addJob({
        variables: { ...job },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container className="bookingForm">
      <Row>
        <Col xs={3} md={4} />
        <Col xs={6} md={4}>
          <Form>
            <Form.Group controlId="formQuantity">
              <Form.Label>QTY</Form.Label>
              <Form.Control
                type="text"
                placeholder="0"
                name="quantity"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBookJob">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose a category"
                readOnly
                name="category"
                onChange={handleChange}
              >
                <option>Furniture</option>
                <option>Scrap Metal</option>
                <option>Yard Waste</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Description</Form.Label>
              <br />
              <Form.Control
                name="description"
                onChange={handleChange}
                as="textarea"
                placeholder="Type here"
              />
            </Form.Group>

            {/* Starting Address */}
            <h3>Pick-up Address</h3>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={handleChange}
                name="addressP"
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                onChange={handleChange}
                name="addressP2"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={handleChange} name="cityP" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleChange}
                  name="stateP"
                >
                  <option>Choose...</option>
                  <option>...</option>
                  <option>Alabama</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={handleChange} name="zipP" />
              </Form.Group>
            </Form.Row>
            <br />

            {/* Ending Address */}
            <h3>Drop-off Address</h3>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={handleChange}
                name="addressD"
              />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                onChange={handleChange}
                name="addressD2"
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={handleChange} name="cityD" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={handleChange}
                  name="stateD"
                >
                  <option>Choose...</option>
                  <option>...</option>
                  <option>Alabama</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={handleChange} name="zipD" />
              </Form.Group>
            </Form.Row>
          </Form>
          <br />
          <Button
            variant="btn btn-success"
            onClick={() => history.push("/BookingB")}
          >
            Continue
          </Button>
        </Col>
        <Col xs={3} md={4} />
      </Row>
    </Container>
  );
};

export default BookingA;
