import React  from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditEvent = () => {
    return (
        <div className="formulario">
        <Form>
          <h2>Des événements</h2>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description de l'événement"
            />
          </Form.Group>
          <Form.Group
          >
            <Form.Label>Date de l'événement</Form.Label>
            <Form.Control name="date" type="date" placeholder="date" />
          </Form.Group>
  
          <Button className="Public" variant="primary" type="submit">
            Modifier
          </Button>
        </Form>
      </div>
    )
}

export default EditEvent;