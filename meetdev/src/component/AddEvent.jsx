import "../assets/styles/adminAdd.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import auth from './Auth'

const AddEvent = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  let history = useHistory()

  const addevent = () => {

    Axios.post("http://localhost:4000/addevent", {
      description: description,
      date: date,
    },
    {
      headers: {
        authorizations: localStorage.getItem('token')
      }
  }).then((reponse) => {
      console.log(reponse);
      auth.loginAdmin(() =>{
        history.push("/EventList");
      })
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
  }


  return (
    <div className="formulario">
      <Form onSubmit={handleSubmit}>
        <h2>Ajouter des événements</h2>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            name="description"
            placeholder="Description de l'événement"
          />
        </Form.Group>
        <Form.Group
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <Form.Label>Date de l'événement</Form.Label>
          <Form.Control name="date" type="date" placeholder="date" />
        </Form.Group>

        <Button onClick={addevent} variant="primary" type="submit">
          Publier
        </Button>
      </Form>
    </div>
  );
};
export default AddEvent;
