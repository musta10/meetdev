import React from "react";
import "../assets/styles/admin.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const  AddEvent = () => {
  return (
    <div className="formulario">
    <Form>
      <h2>Ajouter des événements</h2>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description de l'événement" />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Date de l'événement</Form.Label>
        <Form.Control type="date" placeholder="date" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Publier
      </Button>
    </Form>
    </div>
  );
}
export default AddEvent;
