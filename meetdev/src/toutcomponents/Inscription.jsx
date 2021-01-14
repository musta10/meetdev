import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Axios from 'axios'
import Button from "react-bootstrap/Button";
import "../assets/styles/conexion.scss";
import { useHistory } from "react-router-dom";

const Inscription = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  let history = useHistory()

  const signup = () =>{
    Axios.post('http://localhost:4000/signUp', {
      name: name,
      email: email,
      password: password,
      photo: photo,
    }).then((reponse)=>{
      console.log(reponse);
      
        history.push("/");
      
    })

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }



  return (
    <div className="containers">
      <h1 className="myText">Meet Dev</h1>
      <Form className="conexion" onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupName">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="inputs"
            type="text"
            placeholder="Prénom"
          />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inputs"
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="inputs"
            type="password"
            placeholder="Mot de passe"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPhoto">
          <input
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
            className="inputs"
            type="text"
            placeholder="Photo Profile"
          />
        </Form.Group>
        <div className="buttons">
          <Button type="submit" onClick={signup} className="btn-block bouton-login">S'inscrire</Button>
        </div>
      </Form>
    </div>
  );
};

export default Inscription;
