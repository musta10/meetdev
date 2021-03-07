import "../assets/styles/adminAdd.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import auth from './Auth'
import { useSelector, useDispatch  } from 'react-redux'
import {editEvent} from '../store/actions/actionsEvent'




const EditEvent = () => {
  const [description, setDescription] = useState("");
  const user = useSelector(state => state.userReducer.user)
  const [date, setDate] = useState("");

  let history = useHistory()
  const dispatch = useDispatch()


  const editevent = () => {
    Axios.put(`http://localhost:4000/events/:id`,
    {
      description: description,
      date: date,
    },
    {
      headers: {
        'Content-type': 'application/json',
        'authorization': user.token
      }
    }
    ).then((reponse) => {
      console.log(reponse);
      // trouve la id de la respone je la met dans variable 
      auth.loginAdmin(() =>{
        const token = user.token
        console.log(token);

        dispatch(editEvent({
          description: description,
          date: date,
          // id nom de la varibale de la id 
        },))
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
        <h2>Modifier événements</h2>
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

        <Button className="Public" onClick={editevent} variant="primary" type="submit">
          Modifier
        </Button>
      </Form>
    </div>
  );
};
export default EditEvent;
